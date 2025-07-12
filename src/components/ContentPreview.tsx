import React from 'react';

interface ContentPreviewProps {
  content: string;
  className?: string;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ content, className = "" }) => {
  const stripMarkdownAndFormat = (text: string) => {
    // Remove markdown headers
    text = text.replace(/^#{1,6}\s+/gm, '');
    
    // Remove bold and italic markers
    text = text.replace(/\*\*(.*?)\*\*/g, '$1');
    text = text.replace(/\*(.*?)\*/g, '$1');
    
    // Remove link markdown
    text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
    
    // Remove list markers
    text = text.replace(/^[-*+]\s+/gm, '');
    text = text.replace(/^\d+\.\s+/gm, '');
    
    // Remove blockquote markers
    text = text.replace(/^>\s+/gm, '');
    
    // Remove code blocks
    text = text.replace(/```[\s\S]*?```/g, '');
    text = text.replace(/`(.*?)`/g, '$1');
    
    // Clean up extra whitespace and newlines
    text = text.replace(/\n\s*\n/g, ' ');
    text = text.replace(/\s+/g, ' ');
    
    return text.trim();
  };

  const cleanContent = stripMarkdownAndFormat(content);
  const preview = cleanContent.length > 150 ? cleanContent.substring(0, 150) + '...' : cleanContent;

  return (
    <div className={`text-muted-foreground text-sm leading-relaxed ${className}`}>
      {preview || 'No content preview available'}
    </div>
  );
};

export default ContentPreview;
