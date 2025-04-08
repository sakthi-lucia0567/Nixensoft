"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Indent,
  Outdent,
  LinkIcon,
  ImageIcon,
  TableIcon,
  Code,
  Undo,
  Redo,
  Type,
  Palette,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BlogEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export function BlogEditor({ content, onChange }: BlogEditorProps) {
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addLink = () => {
    if (linkUrl) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkUrl })
        .run();
      setLinkUrl("");
      setShowLinkInput(false);
    }
  };

  const addImage = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      setShowImageInput(false);
    }
  };

  const addTable = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  const fontSizes = [
    { label: "Small", value: "14px" },
    { label: "Normal", value: "16px" },
    { label: "Medium", value: "18px" },
    { label: "Large", value: "24px" },
    { label: "X-Large", value: "32px" },
  ];

  const colors = [
    { label: "Black", value: "#000000" },
    { label: "Gray", value: "#718096" },
    { label: "Red", value: "#E53E3E" },
    { label: "Orange", value: "#DD6B20" },
    { label: "Yellow", value: "#D69E2E" },
    { label: "Green", value: "#38A169" },
    { label: "Blue", value: "#3182CE" },
    { label: "Purple", value: "#805AD5" },
    { label: "Pink", value: "#D53F8C" },
  ];

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 p-2 border-b flex flex-wrap gap-1 items-center">
        {/* Heading Options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" title="Heading">
              <Type className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onSelect={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
            >
              <Heading1 className="mr-2 h-4 w-4" />
              Heading 1
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
            >
              <Heading2 className="mr-2 h-4 w-4" />
              Heading 2
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            >
              <Heading3 className="mr-2 h-4 w-4" />
              Heading 3
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
            >
              <Heading4 className="mr-2 h-4 w-4" />
              Heading 4
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
            >
              <Heading5 className="mr-2 h-4 w-4" />
              Heading 5
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Basic Formatting */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200" : ""}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200" : ""}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-gray-200" : ""}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "bg-gray-200" : ""}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Text Styling */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" title="Font Size">
              <Type className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid gap-1">
              {fontSizes.map((size) => (
                <Button
                  key={size.value}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => {
                    editor.chain().focus().joinItemForward().run();
                  }}
                >
                  <span style={{ fontSize: size.value }}>{size.label}</span>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" title="Text Color">
              <Palette className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid grid-cols-3 gap-1">
              {colors.map((color) => (
                <Button
                  key={color.value}
                  variant="ghost"
                  className="h-8 w-8 p-0"
                  style={{ backgroundColor: color.value }}
                  onClick={() => {
                    editor.chain().focus().setColor(color.value).run();
                  }}
                  title={color.label}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            editor.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""
          }
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""
          }
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={
            editor.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""
          }
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "bg-gray-200" : ""
          }
          title="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* List Formatting */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200" : ""}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "bg-gray-200" : ""}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          title="Indent"
        >
          <Indent className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          title="Outdent"
        >
          <Outdent className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Media Support */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowLinkInput(!showLinkInput)}
            className={editor.isActive("link") ? "bg-gray-200" : ""}
            title="Insert Link"
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          {showLinkInput && (
            <div className="absolute top-full left-0 mt-1 z-10 bg-white border rounded-md shadow-md p-2 flex items-center">
              <Input
                type="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-64 mr-2"
              />
              <Button size="sm" onClick={addLink}>
                Add
              </Button>
            </div>
          )}
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowImageInput(!showImageInput)}
            title="Insert Image"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          {showImageInput && (
            <div className="absolute top-full left-0 mt-1 z-10 bg-white border rounded-md shadow-md p-2 flex items-center">
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-64 mr-2"
              />
              <Button size="sm" onClick={addImage}>
                Add
              </Button>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={addTable}
          title="Insert Table"
        >
          <TableIcon className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Code Block */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "bg-gray-200" : ""}
          title="Code Block"
        >
          <Code className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Undo/Redo */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <Redo className="h-4 w-4" />
        </Button>
      </div>

      <EditorContent
        editor={editor}
        className="prose max-w-none p-4 min-h-[300px]"
      />
    </div>
  );
}
