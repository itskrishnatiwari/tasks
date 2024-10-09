document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;  // Simple input for skills
  
    // Save to local storage
    const userData = {
      name,
      email,
      phone,
      skills
    };
  
    localStorage.setItem('userInfo', JSON.stringify(userData));
  
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
  
    // Optional: Reset form after submission
    document.getElementById('userForm').reset();
  });
  
  // Retrieve data from local storage on page load
  window.addEventListener('load', function() {
    const storedData = localStorage.getItem('userInfo');
    if (storedData) {
      const userInfo = JSON.parse(storedData);
      document.getElementById('name').value = userInfo.name;
      document.getElementById('email').value = userInfo.email;
      document.getElementById('phone').value = userInfo.phone;
      document.getElementById('skills').value = userInfo.skills;
    }
  });
  