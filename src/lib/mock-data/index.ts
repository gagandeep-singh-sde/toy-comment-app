import { v4 as uuidv4 } from "uuid";

export interface MockComment {
  id: string;
  username: string;
  author: string;
  authorImage: string;
  content: string;
  createdAt: Date;
}

export const mockComments: MockComment[] = [
  {
    id: uuidv4(),
    username: "jp",
    author: "JP Lemieux",
    authorImage: "https://avatar.iran.liara.run/public/4",
    content: "Lorem ipsum dolor sit amet.",
    createdAt: new Date(new Date().setHours(new Date().getHours() - 6.22)),
  },
  {
    id: uuidv4(),
    username: "bellaK",
    author: "Bella Khorrami",
    authorImage: "",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    createdAt: new Date(new Date().setHours(new Date().getHours() - 32)),
  },
  {
    id: uuidv4(),
    username: "mahdi",
    author: "Mahdi Dibaiee",
    authorImage: "https://avatar.iran.liara.run/public/20",
    content:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
  },
  {
    id: uuidv4(),
    username: "jape",
    author: "Jake Peralta",
    authorImage: "https://avatar.iran.liara.run/public/37",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    id: uuidv4(),
    username: "bekh",
    author: "Bella Khorrami",
    authorImage: "https://avatar.iran.liara.run/public/78",
    content:
      "Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 18)),
  },
  {
    id: uuidv4(),
    username: "ruha",
    author: "Russ Hanneman",
    authorImage: "https://avatar.iran.liara.run/public/29",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: new Date(new Date().setDate(new Date().getDate() - 23)),
  },
];
