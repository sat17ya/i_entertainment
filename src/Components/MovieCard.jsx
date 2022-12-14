import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard() {
  return (
    <div>
    <div class="hero-item">
      <img src=" " alt="" />
      <div class="hero-item-content">
        <div class="item-content-wraper">
          <div class="item-content-title ">MONEY HEIST</div>
          <div class="movie-title">MONEY HEIST</div>
          <div class="movie-infos">
            <div class="movie-info">
              <span>9.5</span>
              <span>|</span>
            </div>
            <div class="movie-info">
              <span>4 Seasons</span>
              <span>|</span>
            </div>
            <div class="movie-info">
              <span>HD</span>
              <span>|</span>
            </div>
            <div class="movie-info">
              <span>18+</span>
            </div>
          </div>
          <div class="item-content-description">
            Eight thieves take hostages and lock themselves in the Royal Mint
            of Spain as a criminal mastermind manipulates the police to carry
            out his plan.
          </div>
          <Link to="video" smooth={true} duration={1000}>
            <button className="but">Watch Trailer</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="mobile">
      <div class="movie-title">MONEY HEIST</div>
      <div class="movie-infos">
        <div class="movie-info">
          <span>9.5</span>
        </div>
        <div class="movie-info">
          <span>|</span>
        </div>
        <div class="movie-info">
          <span>4 Seasons</span>
        </div>
        <div class="movie-info">
          <span>|</span>
        </div>
        <div class="movie-info">
          <span>HD</span>
        </div>
        <div class="movie-info">
          <span>|</span>
        </div>
        <div class="movie-info">
          <span>18+</span>
        </div>
      </div>
      <div class="item-content-description">
        Eight thieves take hostages and lock themselves in the Royal Mint of
        Spain as a criminal mastermind manipulates the police to carry out his
        plan.
      </div>
      <Link to="video" smooth={true} duration={1000}>
        <button className="but">Watch Trailer</button>
      </Link>
    </div>
  </div>

  )
}
