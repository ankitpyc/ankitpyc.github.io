import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Ankit Mishra | Blog",
  description: "Read Ankit Mishra's latest articles and insights on data science, web development, and technology.",
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const publishedPostsDirectory = path.join(process.cwd(), 'src/content/blog');
  const draftPostsDirectory = path.join(process.cwd(), '_drafts/blog');

  let allFileNames: string[] = [];
  let allPostsData: BlogPost[] = [];

  // Read published posts
  if (fs.existsSync(publishedPostsDirectory)) {
    const publishedFileNames = fs.readdirSync(publishedPostsDirectory);
    allFileNames = [...allFileNames, ...publishedFileNames.map(name => `published/${name}`)];
  }

  // Read draft posts only in development
  if (process.env.NODE_ENV === 'development' && fs.existsSync(draftPostsDirectory)) {
    const draftFileNames = fs.readdirSync(draftPostsDirectory);
    allFileNames = [...allFileNames, ...draftFileNames.map(name => `draft/${name}`)];
  }

  for (const fileNameWithPrefix of allFileNames) {
    const [prefix, fileName] = fileNameWithPrefix.split('/');
    const isDraft = prefix === 'draft';
    const directory = isDraft ? draftPostsDirectory : publishedPostsDirectory;

    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    allPostsData.push({
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      tags: data.tags || [],
      isDraft: isDraft, // Add a flag for draft posts
    });
  }

  // Filter out duplicate slugs, prioritizing published posts
  const uniqueSlugs = new Set<string>();
  const filteredPosts: BlogPost[] = [];
  for (const post of allPostsData) {
    if (!uniqueSlugs.has(post.slug)) {
      uniqueSlugs.add(post.slug);
      filteredPosts.push(post);
    } else if (!post.isDraft) {
      // If a published post has the same slug as a draft, keep the published one
      const existingIndex = filteredPosts.findIndex(p => p.slug === post.slug);
      if (existingIndex !== -1 && filteredPosts[existingIndex].isDraft) {
        filteredPosts[existingIndex] = post;
      }
    }
  }

  return filteredPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  isDraft?: boolean; // Optional property for draft status
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto p-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 animate-fade-in-down">Blog Posts</h1>
      <p className="text-base sm:text-lg text-muted-foreground text-center max-w-xl mx-auto mb-10 sm:mb-12 animate-fade-in-up px-4">
        My thoughts, insights, and learnings on various topics in data science and web development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{post.title}</h2>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">{post.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-secondary/10 text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
