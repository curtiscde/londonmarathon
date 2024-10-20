/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Foo</h6>
        <a className="link link-hover" target="_blank" href="https://www.tcslondonmarathon.com" rel="noreferrer">TCS London Marathon</a>
        <a className="link link-hover">Foo</a>
        <a className="link link-hover">Bar</a>
        <a className="link link-hover">Baz</a>
      </nav>
      <nav>
        <h6 className="footer-title">Bar</h6>
        <a className="link link-hover" target="_blank" href="https://www.tcslondonmarathon.com" rel="noreferrer">TCS London Marathon</a>
        <a className="link link-hover">Foo</a>
        <a className="link link-hover">Bar</a>
        <a className="link link-hover">Baz</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Foo</a>
        <a className="link link-hover">Bar</a>
      </nav>
    </footer>
  );
}
