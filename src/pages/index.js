import * as React from "react"

// styles
const pageStyles = {
  maxWidth: 960,
  padding: 40,
  margin: "0 auto",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  fontSize: "5em",
  margin: ".25em 0",
  padding: 0,

}
const subHeadingStyles = {
  fontSize: "2em",
  margin: ".25em 0",
  padding: 0,
  lineHeight: 1.4,
}

const subSubHeadingStyles = {
  fontWeight: "normal",
  fontSize: ".9em",
  color: "#666"
}

const linkRow = {
  margin: "25px 0"
}

const btnStyles = {
  background: "#0076ff",
  borderRadius: 10,
  color: "#fff",
  display: "inline-block",
  padding: "10px 20px",
  textDecoration: "none"
}

const hrStyles = {
  margin: "3em 0 1em",
  width: "5em"
}

const linkStyles = {
  padding: "10px 20px",
  textDecoration: "none"
}

const tagStyles = {
  background: "#ddd",
  color: "#222",
  display: "inline-block",
  fontSize: "1em",
  padding: "1px 3px"
}

const currentTitle = {
  fontSize: "1.5em",
  fontWeight: "bold",
  margin: 0,
  padding: 0
}

const listStyles = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
}

const accStyles = {
  margin: "10px 0"
}

const title = {
  fontSize: "1.25em",
  fontWeight: "bold",
  margin: "10px 0 5px 0",
  padding: 0
}
const subtitle = {
  fontSize: "1em",
  margin: "0 0 20px 0",
  padding: 0
}

const listItemStyles = {
  margin: 0,
  padding: 0
}

// data
const links = [
  {
    title: "First hire @ Teaching.com",
    subtitle: "Multiple products launched; Revenue growth: 📈"
  },
  {
    title: "First Product Designer @ True Coach",
    subtitle: "Acq. TSG, 2020"
  },
  {
    title: "First Designer @ Explore Data Science",
    subtitle: "Acq. Metis, 2016; SXSW 2015 Interactive Innovation Award Finalist"
  },
  {
    title: "Early Designer @ Code School",
    subtitle: "Acq. PS, 2014"
  },
  
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Tim Dikun</title>
      <h1 style={headingStyles}>
        Tim Dikun
      </h1>
      <h2 style={subHeadingStyles}>
        I used to build products,
        <br />
        now I build product companies.
      </h2>
      <h3 style={subSubHeadingStyles}>This is my career reduced to bullet points.</h3>
      <div style={linkRow}>
        <a href="mailto:tdikun@gmail.com" style={btnStyles}>Get In Touch</a>
        <a href="https://twitter.com/tdikun" style={linkStyles}>Twitter</a>
        <a href="https://www.linkedin.com/in/timdikun/" style={linkStyles}>Linkedin</a>
      </div>
      <hr style={hrStyles} />
      <div>
        <p style={tagStyles}>Current Role:</p>
        <p style={currentTitle}>COO & VP of Product @ Teaching.com</p>
        <p>Makers of K12 (B2E, B2C) educational software with 100M+ AU</p>
        <p>Check out a few of our products:
          <a href="https://reading.com" style={linkStyles}>Reading.com</a>
          <a href="https://typing.com" style={linkStyles}>Typing.com</a>
          <a href="https://nitrotype.com" style={linkStyles}>Nitro Type</a>
        </p>
      </div>
      <hr style={hrStyles} />
      <div style={accStyles}>
        <p style={tagStyles}>Key Accomplishments:</p>
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <p style={title}>{link.title}</p>
              <p style={subtitle}>{link.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default IndexPage
