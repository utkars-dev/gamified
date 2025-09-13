import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EcoClickingGame = () => {
  const [score, setScore] = useState(0);
  const [gameItems, setGameItems] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const items = [
    { name: 'Plastic Bottle', emoji: '🍼', isEcoFriendly: false, color: 'text-red-500' },
    { name: 'Paper Bag', emoji: '🛍', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Glass Bottle', emoji: '🍾', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Banana Peel', emoji: '🍌', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Metal Can', emoji: '🥫', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Tree Sapling', emoji: '🌱', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Cloth Bag', emoji: '👜', isEcoFriendly: true, color: 'text-green-500' },
    { name: 'Car Tire', emoji: '🛞', isEcoFriendly: false, color: 'text-red-500' },
    { name: 'Plastic Bag', emoji: '🛍', isEcoFriendly: false, color: 'text-red-500' },
    { name: 'Cigarette', emoji: '🚬', isEcoFriendly: false, color: 'text-red-500' }
  ];

  const generateRandomItem = useCallback(() => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return {
      ...randomItem,
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 70 + 10, // 10% to 80% of container width
      y: Math.random() * 60 + 20, // 20% to 80% of container height
    };
  }, []);

  const startGame = () => {
    setGameStarted(true);
    setGameEnded(false);
    setScore(0);
    setTimeLeft(30);
    setGameItems([]);
  };

  const endGame = () => {
    setGameStarted(false);
    setGameEnded(true);
    setGameItems([]);
  };

  const handleItemClick = (item) => {
    if (item.isEcoFriendly) {
      setScore(prev => prev + 10);
    } else {
      setScore(prev => prev - 5);
    }
    
    // Remove clicked item
    setGameItems(prev => prev.filter(gameItem => gameItem.id !== item.id));
  };

  // Game timer
  useEffect(() => {
    let interval;
    if (gameStarted && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, timeLeft]);

  // Spawn items periodically
  useEffect(() => {
    let interval;
    if (gameStarted) {
      interval = setInterval(() => {
        setGameItems(prev => {
          // Remove items that are older than 4 seconds and add new ones
          const filteredItems = prev.filter(item => Date.now() - item.spawnTime < 4000);
          const newItem = {
            ...generateRandomItem(),
            spawnTime: Date.now()
          };
          return [...filteredItems, newItem];
        });
      }, 1500); // Spawn new item every 1.5 seconds
    } else {
      setGameItems([]);
    }
    return () => clearInterval(interval);
  }, [gameStarted, generateRandomItem]);

  const getEndMessage = () => {
    if (score >= 50) return { message: "🌟 Great Job! You're an eco-champion!", color: "text-green-600" };
    if (score >= 20) return { message: "🌱 Good work! Keep learning!", color: "text-blue-600" };
    return { message: "🌍 Try Again! Every effort counts!", color: "text-orange-600" };
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            🌍 Click the Eco-Friendly Item!
          </h1>
          <p className="text-center text-green-100">
            Help save the planet by clicking only on eco-friendly items!
          </p>
        </div>

        {/* Game Stats */}
        {gameStarted && (
          <div className="bg-white px-6 py-4 flex justify-between items-center border-b">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <span className="text-green-700 font-bold">Score: {score}</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="text-blue-700 font-bold">Time: {timeLeft}s</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="text-green-600">✓ Eco-friendly: +10</span> | 
              <span className="text-red-600 ml-2">✗ Harmful: -5</span>
            </div>
          </div>
        )}

        {/* Game Area */}
        <div className="relative h-96 md:h-[500px] bg-gradient-to-b from-sky-100 to-green-100 overflow-hidden">
          {!gameStarted && !gameEnded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Ready to Save the Planet?</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Click on eco-friendly items like cloth bags, tree saplings, and recyclable materials. 
                  Avoid harmful items like plastic bottles and car tires!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startGame}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start Game 🚀
                </motion.button>
              </div>
            </div>
          )}

          {gameEnded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-2xl mx-4"
              >
                <div className="text-6xl mb-4">
                  {score >= 50 ? '🏆' : score >= 20 ? '🌟' : '🌱'}
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Over!</h2>
                <div className="text-4xl font-bold text-blue-600 mb-4">Final Score: {score}</div>
                <p className={`text-xl font-semibold mb-6 ${getEndMessage().color}`}>
                  {getEndMessage().message}
                </p>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startGame}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow block w-full"
                  >
                    Play Again 🔄
                  </motion.button>
                </div>
              </motion.div>
            </div>
          )}

          {/* Game Items */}
          <AnimatePresence>
            {gameItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                style={{
  position: 'absolute',
  left: `${item.x}%`,
  top: `${item.y}%`,
}}

                className="cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => handleItemClick(item)}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className={`text-5xl md:text-6xl ${item.color} drop-shadow-lg`}>

                  {item.emoji}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded whitespace-nowrap shadow-md">
                  {item.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Floating eco tips */}
          {gameStarted && (
            <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 text-xs max-w-xs">
              <p className="text-green-700 font-semibold">💡 Eco Tip:</p>
              <p className="text-gray-600">Reusable items help reduce waste!</p>
            </div>
          )}
        </div>

        {/* Instructions - Only show when game not started */}
        {!gameStarted && !gameEnded && (
          <div className="p-4 bg-white border-t shrink-0 overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-bold text-green-600 mb-2">✅ Click These (Eco-Friendly)</h3>
                <div className="flex flex-wrap gap-1">
                  {items.filter(item => item.isEcoFriendly).map((item, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {item.emoji} {item.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-red-600 mb-2">❌ Avoid These (Harmful)</h3>
                <div className="flex flex-wrap gap-1">
                  {items.filter(item => !item.isEcoFriendly).map((item, idx) => (
                    <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                      {item.emoji} {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcoClickingGame;