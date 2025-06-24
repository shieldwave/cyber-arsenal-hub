
import { useState } from 'react';
import { Search, BarChart, FileText, Hash } from 'lucide-react';

const TextAnalysis = () => {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<{
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    readingTime: number;
    wordFrequency: Array<{ word: string; count: number }>;
  } | null>(null);

  const analyzeText = () => {
    if (!inputText.trim()) {
      setAnalysis(null);
      return;
    }

    const characters = inputText.length;
    const charactersNoSpaces = inputText.replace(/\s/g, '').length;
    
    // Words analysis
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Sentences analysis
    const sentences = inputText.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    
    // Paragraphs analysis
    const paragraphs = inputText.split(/\n\s*\n/).filter(para => para.trim().length > 0);
    const paragraphCount = paragraphs.length;
    
    // Reading time (average 200 words per minute)
    const readingTime = Math.ceil(wordCount / 200);
    
    // Word frequency analysis
    const wordFrequencyMap = new Map<string, number>();
    words.forEach(word => {
      const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
      if (cleanWord.length > 2) { // Only count words longer than 2 characters
        wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
      }
    });
    
    const wordFrequency = Array.from(wordFrequencyMap.entries())
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Top 10 most frequent words

    setAnalysis({
      characters,
      charactersNoSpaces,
      words: wordCount,
      sentences: sentenceCount,
      paragraphs: paragraphCount,
      readingTime,
      wordFrequency
    });
  };

  return (
    <div className="space-y-8">
      {/* Text Input */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Text Analysis Tool</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter Text to Analyze</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste or type your text here for analysis..."
              className="terminal-input w-full h-48 px-4 py-2 rounded-md resize-vertical"
            />
          </div>

          <button
            onClick={analyzeText}
            className="cyber-button px-8 py-2 rounded-md hover:shadow-lg flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Analyze Text
          </button>
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <>
          {/* Basic Statistics */}
          <div className="cyber-card">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-cyber-accent" />
              <h3 className="text-xl font-semibold">Text Statistics</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.characters.toLocaleString()}</div>
                <div className="text-sm text-cyber-text/70">Characters</div>
              </div>
              
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.charactersNoSpaces.toLocaleString()}</div>
                <div className="text-sm text-cyber-text/70">Characters (no spaces)</div>
              </div>
              
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.words.toLocaleString()}</div>
                <div className="text-sm text-cyber-text/70">Words</div>
              </div>
              
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.sentences.toLocaleString()}</div>
                <div className="text-sm text-cyber-text/70">Sentences</div>
              </div>
              
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.paragraphs.toLocaleString()}</div>
                <div className="text-sm text-cyber-text/70">Paragraphs</div>
              </div>
              
              <div className="bg-cyber-bg/50 p-4 rounded-lg border border-cyber-border">
                <div className="text-2xl font-bold text-cyber-accent">{analysis.readingTime}</div>
                <div className="text-sm text-cyber-text/70">Min. reading time</div>
              </div>
            </div>
          </div>

          {/* Word Frequency */}
          {analysis.wordFrequency.length > 0 && (
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="w-6 h-6 text-cyber-accent" />
                <h3 className="text-xl font-semibold">Most Frequent Words</h3>
              </div>
              
              <div className="space-y-2">
                {analysis.wordFrequency.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-cyber-bg/50 p-3 rounded-lg border border-cyber-border">
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-accent font-mono text-sm">#{index + 1}</span>
                      <span className="font-medium">{item.word}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-cyber-border rounded-full h-2">
                        <div 
                          className="bg-cyber-accent h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(item.count / analysis.wordFrequency[0].count) * 100}%` }}
                        />
                      </div>
                      <span className="text-cyber-accent font-mono text-sm min-w-[2rem] text-right">
                        {item.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Metrics */}
          <div className="cyber-card">
            <h3 className="text-xl font-semibold mb-4">Readability Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyber-accent">Average Words per Sentence</div>
                <div className="text-lg font-mono">
                  {analysis.sentences > 0 ? (analysis.words / analysis.sentences).toFixed(1) : '0'}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyber-accent">Average Characters per Word</div>
                <div className="text-lg font-mono">
                  {analysis.words > 0 ? (analysis.charactersNoSpaces / analysis.words).toFixed(1) : '0'}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyber-accent">Words per Paragraph</div>
                <div className="text-lg font-mono">
                  {analysis.paragraphs > 0 ? (analysis.words / analysis.paragraphs).toFixed(1) : '0'}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-cyber-accent">Reading Level</div>
                <div className="text-lg">
                  {analysis.words / analysis.sentences < 15 ? 'Easy' : 
                   analysis.words / analysis.sentences < 20 ? 'Medium' : 'Difficult'}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TextAnalysis;
