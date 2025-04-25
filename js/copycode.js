export function copyCode(buttonId) {
    const button = document.getElementById(buttonId);
    const code = button.nextElementSibling.innerText;
  
    navigator.clipboard.writeText(code).then(() => {
      button.innerText = "Copied!";
      setTimeout(() => {
        button.innerText = "Copy";
      }, 2000);
    });
  }  