const { spawn } = require('child_process');
const open = require('open');

// Start Next.js dev server
const nextProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true
});

let serverStarted = false;

nextProcess.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  
  // Look for the local server URL
  const localMatch = output.match(/- Local:\s+(http:\/\/localhost:\d+)/);
  if (localMatch && !serverStarted) {
    serverStarted = true;
    const url = localMatch[1];
    console.log(`\n🚀 Opening browser to ${url}...`);
    
    // Wait a moment then open browser
    setTimeout(async () => {
      try {
        await open(url);
        console.log('✅ Browser opened successfully!');
      } catch (error) {
        console.log(`❌ Failed to open browser: ${error.message}`);
        console.log(`Please manually open: ${url}`);
      }
    }, 1000);
  }
});

nextProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

nextProcess.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down dev server...');
  nextProcess.kill('SIGINT');
  process.exit();
});
