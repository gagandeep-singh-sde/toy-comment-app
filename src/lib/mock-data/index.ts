interface MockComment {
  id: number;
  author: string;
  authorImage: string;
  content: string;
  createdAt: Date;
}

export const mockComments: MockComment[] = [
  {
    id: 1,
    author: "JP Lemieux",
    authorImage: "https://avatar.iran.liara.run/public/4",
    content: "Lorem ipsum dolor sit amet.",
    createdAt: new Date("2024-03-18"),
  },
  {
    id: 2,
    author: "Bella Khorrami",
    authorImage: "https://avatar.iran.liara.run/public/78",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    createdAt: new Date("2024-03-17"),
  },
  {
    id: 3,
    author: "Mahdi Dibaiee",
    authorImage: "https://avatar.iran.liara.run/public/20",
    content:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    createdAt: new Date("2024-03-01"),
  },
  {
    id: 4,
    author: "Jake Peralta",
    authorImage: "https://avatar.iran.liara.run/public/37",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date("2024-02-12"),
  },
];
