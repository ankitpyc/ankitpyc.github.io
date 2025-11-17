import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { mdxComponents } from "@/mdx-components";

interface BlogPost {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
}

async function getBlogPost(slug: string): Promise<{ frontmatter: BlogPost; content: string; isDraft: boolean } | null> {
  const publishedPostsDirectory = path.join(process.cwd(), 'src/content/blog');
  const draftPostsDirectory = path.join(process.cwd(), '_drafts/blog');

  const publishedPath = path.join(publishedPostsDirectory, `${slug}.mdx`);
  const draftPath = path.join(draftPostsDirectory, `${slug}.mdx`);

  let fullPath: string | null = null;
  let isDraft = false;

  if (fs.existsSync(publishedPath)) {
    fullPath = publishedPath;
    isDraft = false;
  } else if (process.env.NODE_ENV === 'development' && fs.existsSync(draftPath)) {
    fullPath = draftPath;
    isDraft = true;
  }

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as BlogPost,
    content,
    isDraft,
  };
}

export async function generateStaticParams() {
  const publishedPostsDirectory = path.join(process.cwd(), 'src/content/blog');
  const draftPostsDirectory = path.join(process.cwd(), '_drafts/blog');

  let allSlugs: string[] = [];

  if (fs.existsSync(publishedPostsDirectory)) {
    const publishedFileNames = fs.readdirSync(publishedPostsDirectory);
    allSlugs = [...allSlugs, ...publishedFileNames.map((fileName) => fileName.replace(/\.mdx$/, ""))];
  }

  if (process.env.NODE_ENV === 'development' && fs.existsSync(draftPostsDirectory)) {
    const draftFileNames = fs.readdirSync(draftPostsDirectory);
    const draftSlugs = draftFileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));
    // Filter out draft slugs that are already present as published slugs
    allSlugs = [...allSlugs, ...draftSlugs.filter(slug => !allSlugs.includes(slug))];
  }

  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const awaitedParams = await params; // Explicitly await params
  const post = await getBlogPost(awaitedParams.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params; // Explicitly await params
  const post = await getBlogPost(awaitedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 py-12 max-w-3xl animate-fade-in-up">
      <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to blog
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.frontmatter.title}</h1>
      <p className="text-muted-foreground text-xs sm:text-sm mb-6">
        {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {post.frontmatter.image && (
        <div className="relative w-full h-48 sm:h-64 mb-8 rounded-lg overflow-hidden">
          <img src={post.frontmatter.image} alt={post.frontmatter.title} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="prose prose-invert max-w-none text-foreground text-base sm:text-lg">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </div>
  );
}
