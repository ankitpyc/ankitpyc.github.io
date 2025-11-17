import { promises as fs } from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, date, tags, description, content, slug } = await req.json();

    if (!title || !date || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const frontmatter = `---
title: "${title}"
date: "${date}"
tags: [${tags.map((tag: string) => `"${tag}"`).join(", ")}]
description: "${description}"
---`;

    const mdxContent = `${frontmatter}\n\n${content}`;

    const filePath = path.join(process.cwd(), "_drafts", "blog", `${slug}.mdx`);
    await fs.writeFile(filePath, mdxContent, "utf8");

    return NextResponse.json(
      { message: "Blog draft saved successfully", slug },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saving blog draft:", error);
    return NextResponse.json(
      { error: "Failed to save blog draft", details: error.message },
      { status: 500 }
    );
  }
}
