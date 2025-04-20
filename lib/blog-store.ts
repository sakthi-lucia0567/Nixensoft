// "use client"

// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// export interface Blog {
//   id: string
//   title: string
//   excerpt: string
//   content: string
//   featuredImage?: string
//   metaTitle?: string
//   metaDescription?: string
//   keywords?: string
//   slug?: string
//   categories?: string[]
//   tags?: string[]
//   status?: "draft" | "published" | "scheduled"
//   scheduledFor?: string
//   createdAt: string
//   updatedAt: string
// }

// export interface Category {
//   id: string
//   name: string
// }

// export interface Tag {
//   id: string
//   name: string
// }

// interface BlogInput {
//   title: string
//   excerpt: string
//   content: string
//   featuredImage?: string
//   metaTitle?: string
//   metaDescription?: string
//   keywords?: string
//   slug?: string
//   categories?: string[]
//   tags?: string[]
//   status?: "draft" | "published" | "scheduled"
//   scheduledFor?: string
// }

// interface BlogStore {
//   blogs: Blog[]
//   categories: Category[]
//   tags: Tag[]
//   addBlog: (blog: BlogInput) => void
//   updateBlog: (id: string, blog: BlogInput) => void
//   deleteBlog: (id: string) => void
//   addCategory: (name: string) => string
//   addTag: (name: string) => string
// }

// export const useBlogStore = create<BlogStore>()(
//   persist(
//     (set) => ({
//       blogs: [],
//       categories: [],
//       tags: [],
//       addBlog: (blogInput: BlogInput) => {
//         const now = new Date().toISOString()
//         const newBlog: Blog = {
//           id: Date.now().toString(),
//           ...blogInput,
//           createdAt: now,
//           updatedAt: now,
//         }
//         set((state) => ({
//           blogs: [newBlog, ...state.blogs],
//         }))
//       },
//       updateBlog: (id: string, blogInput: BlogInput) => {
//         set((state) => ({
//           blogs: state.blogs.map((blog) =>
//             blog.id === id
//               ? {
//                   ...blog,
//                   ...blogInput,
//                   updatedAt: new Date().toISOString(),
//                 }
//               : blog,
//           ),
//         }))
//       },
//       deleteBlog: (id: string) => {
//         set((state) => ({
//           blogs: state.blogs.filter((blog) => blog.id !== id),
//         }))
//       },
//       addCategory: (name: string) => {
//         const id = Date.now().toString()
//         set((state) => {
//           // Check if category already exists
//           const existingCategory = state.categories.find(
//             (category) => category.name.toLowerCase() === name.toLowerCase(),
//           )
//           if (existingCategory) {
//             return { categories: state.categories }
//           }
//           return {
//             categories: [...state.categories, { id, name }],
//           }
//         })
//         return id
//       },
//       addTag: (name: string) => {
//         const id = Date.now().toString()
//         set((state) => {
//           // Check if tag already exists
//           const existingTag = state.tags.find((tag) => tag.name.toLowerCase() === name.toLowerCase())
//           if (existingTag) {
//             return { tags: state.tags }
//           }
//           return {
//             tags: [...state.tags, { id, name }],
//           }
//         })
//         return id
//       },
//     }),
//     {
//       name: "blog-storage",
//     },
//   ),
// )

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Blog {
  id: string;
  title: string;
  author?: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  slug?: string;
  categories?: string[];
  tags?: string[];
  status?: "draft" | "published" | "scheduled";
  scheduledFor?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface BlogInput {
  title: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  slug?: string;
  author?: string;
  categories?: string[];
  tags?: string[];
  status?: "draft" | "published" | "scheduled";
  scheduledFor?: string;
}

interface BlogStore {
  blogs: Blog[];
  categories: Category[];
  tags: Tag[];
  addBlog: (blog: BlogInput) => void;
  updateBlog: (id: string, blog: BlogInput) => void;
  deleteBlog: (id: string) => void;
  addCategory: (name: string) => string;
  addTag: (name: string) => string;
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      blogs: [],
      categories: [],
      tags: [],
      addBlog: (blogInput: BlogInput) => {
        const now = new Date().toISOString();
        const newBlog: Blog = {
          id: Date.now().toString(),
          ...blogInput,
          createdAt: now,
          updatedAt: now,
        };
        set((state) => ({
          blogs: [newBlog, ...state.blogs],
        }));
      },
      updateBlog: (id: string, blogInput: BlogInput) => {
        set((state) => ({
          blogs: state.blogs.map((blog) =>
            blog.id === id
              ? {
                  ...blog,
                  ...blogInput,
                  updatedAt: new Date().toISOString(),
                }
              : blog
          ),
        }));
      },
      deleteBlog: (id: string) => {
        set((state) => ({
          blogs: state.blogs.filter((blog) => blog.id !== id),
        }));
      },
      addCategory: (name: string) => {
        const id = Date.now().toString();
        set((state) => {
          // Check if category already exists
          const existingCategory = state.categories.find(
            (category) => category.name.toLowerCase() === name.toLowerCase()
          );
          if (existingCategory) {
            return { categories: state.categories };
          }
          return {
            categories: [...state.categories, { id, name }],
          };
        });
        return id;
      },
      addTag: (name: string) => {
        const id = Date.now().toString();
        set((state) => {
          // Check if tag already exists
          const existingTag = state.tags.find(
            (tag) => tag.name.toLowerCase() === name.toLowerCase()
          );
          if (existingTag) {
            return { tags: state.tags };
          }
          return {
            tags: [...state.tags, { id, name }],
          };
        });
        return id;
      },
    }),
    {
      name: "blog-storage",
    }
  )
);

/* Helper functions to query blogs from the store */

/**
 * Finds and returns a blog post based on its slug.
 */
export function getBlogPost(slug: string): Blog | undefined {
  const { blogs } = useBlogStore.getState();
  return blogs.find((blog) => blog.slug === slug);
}

/**
 * Returns related posts based on a matching category.
 * Excludes the current post (by postId) from the results.
 *
 * @param postId - The ID of the current blog post.
 * @param category - The category to match for related posts.
 */
export function getRelatedPosts(postId: string, category: string): Blog[] {
  const { blogs } = useBlogStore.getState();
  return blogs.filter(
    (blog) =>
      blog.id !== postId &&
      blog.categories &&
      blog.categories.includes(category)
  );
}
