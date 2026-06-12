const fs = require('fs')

const files = [
  'src/components/Navbar.jsx',
  'src/sections/Hero.jsx', 
  'src/sections/About.jsx',
  'src/sections/Contact.jsx',
  'src/sections/Projects.jsx',
  'src/sections/Skills.jsx',
  'src/components/ProjectCard.jsx',
  'src/components/Chatbot.jsx',
  'src/App.jsx',
]

files.forEach(file => {
  if (!fs.existsSync(file)) return
  let content = fs.readFileSync(file, 'utf8')
  const lines = content.split('\n')
  if (lines[0].startsWith('cat >')) {
    lines.shift()
    fs.writeFileSync(file, lines.join('\n'))
    console.log('Fixed: ' + file)
  } else {
    console.log('OK: ' + file)
  }
})
