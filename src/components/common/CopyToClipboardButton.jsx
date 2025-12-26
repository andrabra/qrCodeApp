import { useState } from 'react';
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

export function CopyToClipboardButton({ text, children }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button onClick={handleCopy}>
      {copied ? (
        <ClipboardDocumentCheckIcon className='cursor-pointer h-6 w-6 text-gray-700 hover:text-gray-500' />
      ) : (
        children || (
          <ClipboardDocumentIcon className='cursor-pointer h-6 w-6 text-gray-700 hover:text-gray-500' />
        )
      )}
    </button>
  );
}
