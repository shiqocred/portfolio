import React from 'react'

export default function Download({ fileUrl, fileName, children, className }) {

    const handleClick = () => {
      fetch(fileUrl)
        .then(res => res.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        })
        .catch(error => console.log(error));
    }
  
  return (
    <button onClick={handleClick} className={className}>
        {children}
    </button>
  )
}
