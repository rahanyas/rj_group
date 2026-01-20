import './homepage.css';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const GameHome = () => {
  return (
    <main className="game">

      {/* ===== HERO ===== */}
      <section className="game-hero">
        <div className="hero-wrapper">

          <motion.div
            className="hero-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Action RPG</span>
            <h1>Shadow Arena</h1>
            <p>
              A next-generation combat experience with
              deep strategy and cinematic battles.
            </p>
            <button className="btn-primary">Play Now</button>
          </motion.div>

          <motion.div
            className="hero-media image-hover"
            initial={{ opacity: 0, rotateX: 8, rotateY: -8 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
            whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
              alt="Gameplay"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== GAMEPLAY GALLERY ===== */}
      <section className="game-gallery">
        <h2>Gameplay Highlights</h2>

        <div className="gallery-grid">
          {[
            "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
            "https://images.unsplash.com/photo-1556438064-2d7646166914"
          ].map((img, i) => (
            <motion.div
              className="gallery-card image-hover"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 8, rotateX: -8, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={`${img}?auto=format&fit=crop&w=800&q=80`} alt="Game scene" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CHARACTERS ===== */}
      <section className="game-characters">
        <h2>Characters</h2>

        <div className="character-grid">
          {["Warrior", "Assassin", "Mage"].map((name, i) => (
            <motion.div
              className="character-card"
              key={i}
              whileHover={{ y: -10, rotateX: 6 }}
              transition={{ duration: 0.4 }}
            >
              <div className="image-hover">
                <img
                  src="https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80"
                  alt={name}
                />
              </div>
              <h3>{name}</h3>
              <p>Unique abilities and playstyle.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WORLD ===== */}
      <section className="game-world">
        <motion.div
          className="world-wrapper image-hover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ rotateY: -6, scale: 1.03 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
            alt="World"
          />
          <div className="world-text">
            <h2>Explore Vast Worlds</h2>
            <p>
              Travel through dark kingdoms, frozen lands,
              and mystical arenas filled with danger.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="game-cta">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Enter the Arena?
        </motion.h2>

        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Playing
        </motion.button>
      </section>

    </main>
  );
};

export default GameHome;
