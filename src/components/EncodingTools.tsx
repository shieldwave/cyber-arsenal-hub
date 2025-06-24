
import { useState } from 'react';
import { Code, ArrowRightLeft, FileText } from 'lucide-react';

const EncodingTools = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedTool, setSelectedTool] = useState<'base64' | 'url' | 'html'>('base64');
  const [operation, setOperation] = useState<'encode' | 'decode'>('encode');

  const processText = () => {
    if (!inputText) return;

    try {
      let result = '';
      
      if (selectedTool === 'base64') {
        if (operation === 'encode') {
          result = btoa(inputText);
        } else {
          result = atob(inputText);
        }
      } else if (selectedTool === 'url') {
        if (operation === 'encode') {
          result = encodeURIComponent(inputText);
        } else {
          result = decodeURIComponent(inputText);
        }
      } else if (selectedTool === 'html') {
        if (operation === 'encode') {
          result = inputText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
        } else {
          result = inputText
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'");
        }
      }
      
      setOutputText(result);
    } catch (error) {
      setOutputText('Error: Invalid input for decoding');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div className="space-y-8">
      {/* Tool Selection */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Encoding/Decoding Tools</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setSelectedTool('base64')}
            className={`cyber-button px-4 py-3 rounded-md text-center ${
              selectedTool === 'base64' ? 'border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            Base64
          </button>
          <button
            onClick={() => setSelectedTool('url')}
            className={`cyber-button px-4 py-3 rounded-md text-center ${
              selectedTool === 'url' ? 'border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            URL Encoding
          </button>
          <button
            onClick={() => setSelectedTool('html')}
            className={`cyber-button px-4 py-3 rounded-md text-center ${
              selectedTool === 'html' ? 'border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            HTML Encoding
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setOperation('encode')}
            className={`cyber-button px-4 py-2 rounded-md ${
              operation === 'encode' ? 'border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setOperation('decode')}
            className={`cyber-button px-4 py-2 rounded-md ${
              operation === 'decode' ? 'border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            Decode
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Enter text to ${operation}...`}
              className="terminal-input w-full h-32 px-4 py-2 rounded-md resize-vertical"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={processText}
              className="cyber-button px-8 py-2 rounded-md hover:shadow-lg flex items-center gap-2"
            >
              <ArrowRightLeft className="w-4 h-4" />
              {operation === 'encode' ? 'Encode' : 'Decode'}
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Output</label>
              {outputText && (
                <button
                  onClick={copyToClipboard}
                  className="text-cyber-accent text-sm hover:underline"
                >
                  Copy to Clipboard
                </button>
              )}
            </div>
            <textarea
              value={outputText}
              readOnly
              placeholder="Processed text will appear here..."
              className="terminal-input w-full h-32 px-4 py-2 rounded-md resize-vertical bg-cyber-bg/50"
            />
          </div>
        </div>
      </div>

      {/* Tool Information */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Tool Information</h3>
        </div>
        
        {selectedTool === 'base64' && (
          <div className="space-y-2 text-sm text-cyber-text/70">
            <p><strong>Base64:</strong> A binary-to-text encoding scheme that represents binary data in ASCII string format.</p>
            <p><strong>Use cases:</strong> Email attachments, data URLs, API tokens, storing binary data in text format.</p>
            <p><strong>Note:</strong> Base64 is encoding, not encryption. It provides no security.</p>
          </div>
        )}
        
        {selectedTool === 'url' && (
          <div className="space-y-2 text-sm text-cyber-text/70">
            <p><strong>URL Encoding:</strong> Converts characters into a format that can be transmitted over the Internet.</p>
            <p><strong>Use cases:</strong> Form data submission, query parameters, special characters in URLs.</p>
            <p><strong>Example:</strong> Space becomes %20, & becomes %26</p>
          </div>
        )}
        
        {selectedTool === 'html' && (
          <div className="space-y-2 text-sm text-cyber-text/70">
            <p><strong>HTML Encoding:</strong> Converts characters to HTML entities to prevent XSS attacks.</p>
            <p><strong>Use cases:</strong> Displaying user input safely, preventing script injection.</p>
            <p><strong>Example:</strong> &lt; becomes &amp;lt;, &gt; becomes &amp;gt;</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncodingTools;
