
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
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Encoding/Decoding Tools
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Base64, URL, and HTML encoding/decoding</p>
      </div>

      {/* Tool Selection */}
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100 mb-10">
        <div className="flex items-center gap-3 mb-6 relative z-[1]">
          <Code className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Encoding/Decoding Tools</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative z-[1]">
          <button
            onClick={() => setSelectedTool('base64')}
            className={`px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-[10px] hover:border-[#c7c7c7] hover:scale-[1.02] text-center ${
              selectedTool === 'base64' ? 'border-[#c7c7c7] bg-[rgba(255,255,255,0.1)]' : ''
            }`}
          >
            Base64
          </button>
          <button
            onClick={() => setSelectedTool('url')}
            className={`px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-[10px] hover:border-[#c7c7c7] hover:scale-[1.02] text-center ${
              selectedTool === 'url' ? 'border-[#c7c7c7] bg-[rgba(255,255,255,0.1)]' : ''
            }`}
          >
            URL Encoding
          </button>
          <button
            onClick={() => setSelectedTool('html')}
            className={`px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-[10px] hover:border-[#c7c7c7] hover:scale-[1.02] text-center ${
              selectedTool === 'html' ? 'border-[#c7c7c7] bg-[rgba(255,255,255,0.1)]' : ''
            }`}
          >
            HTML Encoding
          </button>
        </div>

        <div className="flex gap-4 mb-6 relative z-[1]">
          <button
            onClick={() => setOperation('encode')}
            className={`px-6 py-3 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-[10px] hover:border-[#c7c7c7] hover:scale-[1.02] ${
              operation === 'encode' ? 'border-[#c7c7c7] bg-[rgba(255,255,255,0.1)]' : ''
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => setOperation('decode')}
            className={`px-6 py-3 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-[10px] hover:border-[#c7c7c7] hover:scale-[1.02] ${
              operation === 'decode' ? 'border-[#c7c7c7] bg-[rgba(255,255,255,0.1)]' : ''
            }`}
          >
            Decode
          </button>
        </div>

        <div className="space-y-6 relative z-[1]">
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Enter text to ${operation}...`}
              className="w-full h-32 px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70 resize-vertical"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={processText}
              className="px-8 py-4 bg-gradient-to-br from-[#838383] to-[#4c4c4c] border-none rounded-2xl text-white text-lg font-bold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden shadow-[0_12px_24px_rgba(217,217,217,0.3)] hover:transform hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(202,202,202,0.4)] active:transform active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <ArrowRightLeft className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              {operation === 'encode' ? 'Encode' : 'Decode'}
            </button>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-white">Output</label>
              {outputText && (
                <button
                  onClick={copyToClipboard}
                  className="text-white text-sm hover:underline"
                >
                  Copy to Clipboard
                </button>
              )}
            </div>
            <textarea
              value={outputText}
              readOnly
              placeholder="Processed text will appear here..."
              className="w-full h-32 px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] placeholder:text-[#717171] placeholder:opacity-70 resize-vertical"
            />
          </div>
        </div>
      </div>

      {/* Tool Information */}
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
        <div className="flex items-center gap-3 mb-4 relative z-[1]">
          <FileText className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Tool Information</h3>
        </div>
        
        <div className="relative z-[1]">
          {selectedTool === 'base64' && (
            <div className="space-y-2 text-sm text-[#b0b0b0]">
              <p><strong className="text-white">Base64:</strong> A binary-to-text encoding scheme that represents binary data in ASCII string format.</p>
              <p><strong className="text-white">Use cases:</strong> Email attachments, data URLs, API tokens, storing binary data in text format.</p>
              <p><strong className="text-white">Note:</strong> Base64 is encoding, not encryption. It provides no security.</p>
            </div>
          )}
          
          {selectedTool === 'url' && (
            <div className="space-y-2 text-sm text-[#b0b0b0]">
              <p><strong className="text-white">URL Encoding:</strong> Converts characters into a format that can be transmitted over the Internet.</p>
              <p><strong className="text-white">Use cases:</strong> Form data submission, query parameters, special characters in URLs.</p>
              <p><strong className="text-white">Example:</strong> Space becomes %20, & becomes %26</p>
            </div>
          )}
          
          {selectedTool === 'html' && (
            <div className="space-y-2 text-sm text-[#b0b0b0]">
              <p><strong className="text-white">HTML Encoding:</strong> Converts characters to HTML entities to prevent XSS attacks.</p>
              <p><strong className="text-white">Use cases:</strong> Displaying user input safely, preventing script injection.</p>
              <p><strong className="text-white">Example:</strong> &lt; becomes &amp;lt;, &gt; becomes &amp;gt;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EncodingTools;
