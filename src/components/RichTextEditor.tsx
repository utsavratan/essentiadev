import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Bold, Italic, Link, List, ListOrdered, Heading1, Heading2, Heading3, Quote } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, label }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertFormat = (prefix: string, suffix: string = '', placeholder: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const replacement = selectedText || placeholder;
    
    const newValue = 
      value.substring(0, start) + 
      prefix + replacement + suffix + 
      value.substring(end);
    
    onChange(newValue);
    
    // Set cursor position after the inserted text
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + prefix.length + replacement.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const insertHeading = (level: number) => {
    const prefix = '#'.repeat(level) + ' ';
    insertFormat(prefix, '', 'Heading text');
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      const linkText = prompt('Enter link text:') || 'Link';
      insertFormat(`[${linkText}](`, ')', url);
    }
  };

  const insertList = (ordered: boolean = false) => {
    const prefix = ordered ? '1. ' : '- ';
    insertFormat(prefix, '', 'List item');
  };

  const insertBlockquote = () => {
    insertFormat('> ', '', 'Quote text');
  };

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      
      {/* Formatting Toolbar */}
      <div className="border rounded-t-md p-2 bg-muted/30 flex flex-wrap gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(1)}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(2)}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(3)}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </Button>
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertFormat('**', '**', 'bold text')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertFormat('*', '*', 'italic text')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </Button>
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertList(false)}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertList(true)}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        
        <div className="w-px h-6 bg-border mx-1" />
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertLink}
          title="Insert Link"
        >
          <Link className="w-4 h-4" />
        </Button>
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertBlockquote}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Text Area */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[300px] p-3 border rounded-b-md border-t-0 resize-y font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Start writing your blog post content..."
      />
      
      {/* Preview Note */}
      <p className="text-sm text-muted-foreground">
        Use the formatting buttons above or type markdown-style formatting. Preview will be shown on the blog post page.
      </p>
    </div>
  );
};

export default RichTextEditor;
