import React, { useState, useRef, useEffect } from 'react';
import { Upload, AlertCircle, CheckCircle, FileVideo, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './fileupload.css'
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          alpha: Math.random() * 0.5 + 0.5,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};

const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        rotateX: 10,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </motion.div>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

const DeepfakeDetector = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile);
      animateUpload();
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      animateUpload();
    }
  };

  const animateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      setResults({
        video: data.video,
        classification: data.classification,
        prediction: data.prediction,
        plotImage: data.plot_image,
      });
    } catch (err) { 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-8 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.2,
          }}
          className="text-5xl font-bold text-white text-center mb-12"
        >
          THE REAL EYE 
          
        </motion.h1>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            delay: 0.2,
          }}
          className="text-5xl font-bold text-white text-center mb-12"
        >
          DEEPFAKE DETECTION SYSYTEM 
          
        </motion.h1>

        <FloatingCard>
          <motion.div
            className={`p-8 rounded-lg bg-white/10 backdrop-blur-lg border-2 border-dashed 
              ${isDragging ? 'border-blue-400' : 'border-gray-400'} 
              transition-all duration-300 cursor-pointer hover:border-blue-400
              shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
            whileHover={{
              boxShadow: '0 0 25px rgba(59,130,246,0.7)',
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="video/*"
              className="hidden"
            />

            <div className="text-center">
              <motion.div
                animate={{
                  scale: isDragging ? 1.1 : 1,
                  rotateZ: isDragging ? [0, -10, 10, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: isDragging ? Infinity : 0,
                }}
                className="inline-block p-4 rounded-full bg-white/20 mb-4"
              >
                <Upload className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-white text-lg mb-2">{file ? file.name : 'Drop your video here or click to browse'}</p>
              <p className="text-gray-300 text-sm">Supports MP4, AVI, MOV formats</p>
            </div>

            {file && <ProgressBar progress={uploadProgress} />}
          </motion.div>
        </FloatingCard>

        {results && !loading && (
  <div className="mt-8 text-center text-white">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {results.classification === "Deepfake" ? (
        <div className="flex justify-center items-center text-red-500">
          <AlertCircle className="w-10 h-10 mr-2" />
          <span>Deepfake Detected! Score: {results.prediction}</span>
        </div>
      ) : (
        <div className="flex justify-center items-center text-green-500">
          <CheckCircle className="w-10 h-10 mr-2" />
          <span>Video is Authentic! Score: {results.prediction}</span>
        </div>
      )}
      {/* Display plot image if available */}
      {results.plotImage && (
        <img
          src={`data:image/png;base64,${results.plotImage}`}
          alt="Analysis plot"
          className="mt-4 mx-auto"
        />
      )}
    </motion.div>
  </div>
)}

        {error && (
          <div className="mt-8 text-center text-white">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center text-red-500"
            >
              <AlertCircle className="w-8 h-8 mr-2" />
              <span>{error}</span>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DeepfakeDetector;
