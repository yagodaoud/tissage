import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import WomanPainting from '../../resources/woman-painting.jpg';
import WomanPottery from '../../resources/woman-pottery.jpg';
import Handcrafting from '../../resources/handcrafting.jpg';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselSlides = [
    {
      id: 1,
      title: "Faça Parte.",
      buttonText: "Seja Parceiro",
      buttonLink: "/register",
      backgroundImage: WomanPainting
    },
    {
      id: 2,
      title: "Descubra Artesanato",
      buttonText: "Ver Produtos",
      buttonLink: "/produtos",
      backgroundImage: Handcrafting
    },
    {
      id: 3,
      title: "Conheça Artesãos",
      buttonText: "Explorar",
      buttonLink: "/artesaos",
      backgroundImage: WomanPottery
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="home-page">
      {/* Hero Carousel Section */}
      <section className="hero-carousel">
        <div className="carousel-container">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="carousel-slides">
            {carouselSlides.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.backgroundImage})`,
                  backgroundPosition: 'center 20%'
                }}
              >
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <Link to={carouselSlides[currentSlide].buttonLink} className="carousel-button">
                    {carouselSlides[currentSlide].buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow next" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Seção de Categorias */}
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>Categorias</h2>
          </div>
          <div className="categories-grid">
            <Link to="/produtos?category=Textiles" className="category-card">
              <div className="category-image">
                <h3 className="category-name">Têxteis</h3>
              </div>
            </Link>
            <Link to="/produtos?category=Ceramics" className="category-card">
              <div className="category-image">
                <h3 className="category-name">Cerâmica</h3>
              </div>
            </Link>
            <Link to="/produtos?category=Jewelry" className="category-card">
              <div className="category-image">
                <h3 className="category-name">Joias</h3>
              </div>
            </Link>
            <Link to="/produtos?category=Woodwork" className="category-card">
              <div className="category-image">
                <h3 className="category-name">Marcenaria</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="featured-products">
        <div className="container">
          <div className="section-title">
            <h2>Produtos em Destaque</h2>
          </div>
          <div className="products-grid">
            <Link to="/produtos/1" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Cesta de Palha</h3>
                <p className="product-artisan">Por Maria Silva</p>
                <p className="product-price">R$45,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
            <Link to="/produtos/2" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Vaso de Cerâmica</h3>
                <p className="product-artisan">Por João Santos</p>
                <p className="product-price">R$65,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
            <Link to="/produtos/3" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Colar de Miçangas</h3>
                <p className="product-artisan">Por Ana Oliveira</p>
                <p className="product-price">R$35,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
            <Link to="/produto/4" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Tábua de Madeira</h3>
                <p className="product-artisan">Por Carlos Mendes</p>
                <p className="product-price">R$55,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
            <Link to="/produtos/5" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Escultura de Madeira</h3>
                <p className="product-artisan">Por Paulo Matos</p>
                <p className="product-price">R$80,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
            <Link to="/produtos/6" className="product-card">
              <div className="product-image">Imagem do Produto</div>
              <div className="product-info">
                <h3 className="product-name">Bolsa de Couro</h3>
                <p className="product-artisan">Por Maria Lucia</p>
                <p className="product-price">R$70,00</p>
                <button className="button">Adicionar ao Carrinho</button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Histórias dos Artesãos */}
      <section className="artisan-stories">
        <div className="container">
          <div className="section-title">
            <h2>Conheça Nossos Artesãos</h2>
          </div>
          <div className="artisan-card">
            <div className="artisan-image">Imagem do Artesão</div>
            <div className="artisan-info">
              <h3 className="artisan-name">Maria Silva</h3>
              <p className="artisan-specialty">Têxteis Artesanais</p>
              <p className="artisan-bio">
                Maria tece tecidos tradicionais brasileiros há mais de 20 anos, utilizando técnicas transmitidas por gerações. Cada peça conta uma história de herança e habilidade artesanal.
              </p>
              <Link to="/artesao/1" className="button">Ver Perfil</Link>
            </div>
          </div>
          <div className="artisan-card">
            <div className="artisan-image">Imagem do Artesão</div>
            <div className="artisan-info">
              <h3 className="artisan-name">João Santos</h3>
              <p className="artisan-specialty">Cerâmica</p>
              <p className="artisan-bio">
                João cria peças cerâmicas inspiradas nas paisagens naturais de sua cidade litorânea. Seu trabalho combina técnicas tradicionais com design contemporâneo.
              </p>
              <Link to="/artesao/2" className="button">Ver Perfil</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">Imagem Sobre</div>
            <div className="about-text">
              <h2>Nossa Missão</h2>
              <p>A TISSAGE foi fundada com uma missão simples: conectar artesãos talentosos com clientes que valorizam qualidade e o feito à mão.</p>
              <p>Acreditamos em práticas sustentáveis, comércio justo e na preservação de técnicas artesanais tradicionais, enquanto ajudamos artesãos a alcançarem o mercado global.</p>
              <p>Cada compra apoia diretamente um artesão e sua comunidade, ajudando a preservar o patrimônio cultural e a promover a independência econômica.</p>
              <Link to="/about" className="button">Saiba Mais</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
