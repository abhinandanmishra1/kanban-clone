import { User1, User2, User3, User4, User5 } from "../assets";

export const data = {
  todo: [
    {
      id: 1,
      tag: "Low",
      title: "Write a blog post",
      description: "This is a blog post about the latest trends in machine learning.",
      images: ["https://source.unsplash.com/random/300x200"],
      comments: [
        {
          username: "User1",
          comment: "This is a comment for task 1",
        },
      ],
      files: [
        {
          name: "File 1",
          url: "https://dummyurl.com/file1",
        },
      ],
      users: [
        {
          username: "User1",
          imageUrl: User1,
        },
        {
          username: "User2",
          imageUrl: User2,
        },
        {
          username: "User3",
          imageUrl: User3,
        },
        {
          username: "User4",
          imageUrl: User4,
        },
      ],
    },
    {
      id: 2,
      tag: "Low",
      title: "Plan a meeting",
      description: "This is a meeting to discuss the upcoming project.",
      images: ["https://source.unsplash.com/random/300x200"],
      comments: [
        {
          username: "User2",
          comment: "This is a comment for task 2",
        },
      ],
      files: [
        {
          name: "File 2",
          url: "https://dummyurl.com/file2",
        },
      ],
      users: [
        {
          username: "User2",
          imageUrl: User2,
        },
      ],
    },
    {
      id: 3,
      tag: "Low",
      title: "Respond to emails",
      description: "This is a task to respond to emails from clients and customers.",
      images: ["https://source.unsplash.com/random/300x200"],
      comments: [
        {
          username: "User3",
          comment: "This is a comment for task 3",
        },
      ],
      files: [
        {
          name: "File 3",
          url: "https://dummyurl.com/file3",
        },
      ],
      users: [
        {
          username: "User3",
          imageUrl: User3,
        },
        {
          username: "User1",
          imageUrl: User1,
        },
      ],
    },
  ],
  progress: [
    {
      id: 4,
      tag: "Medium",
      title: "Code a new feature",
      description: "This is a task to code a new feature for the website.",
      images: ["https://source.unsplash.com/random/300x200"],
      comments: [
        {
          username: "User4",
          comment: "This is a comment for task 4",
        },
      ],
      files: [
        {
          name: "File 4",
          url: "https://dummyurl.com/file4",
        },
      ],
      users: [
        {
          username: "User4",
          imageUrl: User4,
        },
      ],
    },
  ],
  done: [
    {
      id: 6,
      tag: "Completed",
      title: "Complete a project",
      description: "This is a task to complete a project for a client.",
      images: ["https://source.unsplash.com/random/300x200"],
      comments: [
        {
          username: "User6",
          comment: "This is a comment for task 6",
        },
      ],
      files: [
        {
          name: "File 6",
          url: "https://dummyurl.com/file6",
        },
      ],
      users: [
        {
          username: "User6",
          imageUrl: User5,
        },
      ],
    },
  ],
};
