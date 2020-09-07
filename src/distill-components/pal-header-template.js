import logo from '../assets/distill-logo.svg';

export const palHeaderTemplate = `
<style>
pal-header {
  position: relative;
  height: 60px;
  background-color: hsl(200, 60%, 15%);
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}
pal-header .content {
  height: 70px;
  grid-column: page;
}
pal-header a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 22px 0;
}
pal-header a:hover {
  color: rgba(255, 255, 255, 1);
}
pal-header svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}
@media(min-width: 1080px) {
  pal-header {
    height: 70px;
  }
  pal-header a {
    height: 70px;
    line-height: 70px;
    padding: 28px 0;
  }
  pal-header .logo {
  }
}
pal-header svg path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
}
pal-header .logo {
  font-size: 17px;
  font-weight: 200;
}
pal-header .nav {
  float: right;
  font-weight: 300;
}
pal-header .nav a {
  font-size: 12px;
  margin-left: 24px;
  text-transform: uppercase;
}
</style>
<div class="content">
  <a href="https://predictive-analytics-lab.github.io/" class="logo">
    ${logo}
    Predictive Analytics Laboratory
  </a>
  <nav class="nav">
    <a href="https://predictive-analytics-lab.github.io/reading">Reading Group</a>
    <a href="https://predictive-analytics-lab.github.io/publications">Publications</a>
    <a href="https://predictive-analytics-lab.github.io/jobs">Jobs</a>
  </nav>
</div>
`;
