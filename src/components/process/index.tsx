import React from 'react'
import "./style.css"
import { AnimationProgres } from './animationProgres'
export const Process = () => {
  return (
     <section className="about section" id="about">
      <div className="container">
        <div className="about-card">
          <div className="about-content">
            <h2 className="about-title">Продвигаем бренды</h2>
            <p className="about-subtitle">Через доверенные личности и эффективные стратегии</p>
            <p className="about-description">
              Для нас инфлюенс-маркетинг — это не просто коллаборации, а способ выстраивать долгосрочные отношения между брендами и людьми, формировать эмоциональную связь и создавать истории, которые хочется разделить.
            </p>
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                Получить медиакит
              </a>
              <a href="#contact" className="btn btn-secondary">
                Запустить кампанию
              </a>
            </div>
          </div>
          <div className="about-image">
            <AnimationProgres/>
          </div>
        </div>
      </div>
    </section>
  )
}
