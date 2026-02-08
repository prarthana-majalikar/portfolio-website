# Skills Logos Setup Guide

This directory contains the official logos for the skills listed in your portfolio.

## 📥 How to Add Logos

### Option 1: Download from Simple Icons (Recommended)

1. Visit [Simple Icons](https://simpleicons.org/)
2. Search for the technology/tool name
3. Download the SVG file
4. Save it in this directory with a lowercase name (e.g., `python.svg`)

### Option 2: From Official Websites

Download logos directly from the official websites:

- **Python**: https://www.python.org/community/logos/
- **Java**: https://www.oracle.com/java/
- **Docker**: https://www.docker.com/company/newsroom/media-resources/
- **GCP**: https://cloud.google.com/press
- **AWS**: https://aws.amazon.com/architecture/icons/

### Option 3: Automated Script (Node.js)

Create a script to download logos automatically:

```javascript
// download-logos.js
const https = require('https');
const fs = require('fs');

const logos = [
  { name: 'python', url: 'https://cdn.simpleicons.org/python' },
  { name: 'java', url: 'https://cdn.simpleicons.org/openjdk' },
  { name: 'docker', url: 'https://cdn.simpleicons.org/docker' },
  { name: 'kubernetes', url: 'https://cdn.simpleicons.org/kubernetes' },
  { name: 'gcp', url: 'https://cdn.simpleicons.org/googlecloud' },
  { name: 'aws', url: 'https://cdn.simpleicons.org/amazonaws' },
  { name: 'postgresql', url: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'mongodb', url: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'git', url: 'https://cdn.simpleicons.org/git' },
  { name: 'jenkins', url: 'https://cdn.simpleicons.org/jenkins' },
  { name: 'grafana', url: 'https://cdn.simpleicons.org/grafana' },
  { name: 'prometheus', url: 'https://cdn.simpleicons.org/prometheus' },
  { name: 'langchain', url: 'https://cdn.simpleicons.org/langchain' },
  { name: 'tensorflow', url: 'https://cdn.simpleicons.org/tensorflow' },
  { name: 'pytorch', url: 'https://cdn.simpleicons.org/pytorch' },
  { name: 'sklearn', url: 'https://cdn.simpleicons.org/scikitlearn' },
  { name: 'spring', url: 'https://cdn.simpleicons.org/spring' },
  { name: 'fastapi', url: 'https://cdn.simpleicons.org/fastapi' },
  { name: 'flask', url: 'https://cdn.simpleicons.org/flask' },
];

logos.forEach(({ name, url }) => {
  https.get(url, (res) => {
    const fileStream = fs.createWriteStream(`${name}.svg`);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${name}.svg`);
    });
  });
});
```

Run with: `node download-logos.js`

## 🎨 Logo Guidelines

1. **Format**: Use SVG for best quality and performance
2. **Size**: SVGs are vector-based, so size doesn't matter
3. **Naming**: Use lowercase, hyphen-separated names (e.g., `google-cloud.svg`)
4. **Colors**: Logos should work on both light and dark backgrounds
5. **Attribution**: Keep licenses and attributions if required

## 📋 Required Logos

Based on your current skills in `/lib/data.ts`:

### AI & Machine Learning
- [ ] python.svg
- [ ] langchain.svg
- [ ] tensorflow.svg
- [ ] sklearn.svg
- [ ] pytorch.svg

### Cloud & Infrastructure
- [ ] gcp.svg
- [ ] aws.svg
- [ ] docker.svg
- [ ] kubernetes.svg

### Backend Engineering
- [ ] java.svg
- [ ] spring.svg
- [ ] fastapi.svg
- [ ] flask.svg
- [ ] postgresql.svg
- [ ] mongodb.svg

### DevOps & Tools
- [ ] git.svg
- [ ] jenkins.svg
- [ ] grafana.svg
- [ ] prometheus.svg

## 🔄 After Adding Logos

1. Update the logo paths in `/lib/data.ts`:
   ```typescript
   {
     name: "Python",
     logo: "/skills-logos/python.svg",
     category: "language"
   }
   ```

2. Verify logos appear correctly in the Skills section

## 🎨 Customization

If you want to customize the logo display:

1. Edit `/components/Skills.tsx`
2. Modify the `SkillCard` component
3. Add custom styling or hover effects

## 📦 CDN Alternative

Instead of downloading, you can use CDN links:

```typescript
logo: "https://cdn.simpleicons.org/python"
```

This is easier but requires internet connection and may be slower.

## 🔍 Troubleshooting

- **Logo not showing**: Check the file path and name match exactly
- **Wrong colors**: SVG might need color adjustment for dark mode
- **Size issues**: Ensure container div has proper dimensions
