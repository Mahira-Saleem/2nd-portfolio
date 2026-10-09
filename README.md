const {createClient} = supabase;
const superbaseURL = 'https://znubayscztsrerushofz.supabase.co'
const superbaseKEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpudWJheXNjenRzcmVydXNob2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE1MjA4NTcsImV4cCI6MjEwNzA5Njg1N30.PN6JC8Kq1zNF58ZqmkjbTehnR5gjcBeq19gajPIiO5c'

const supabaseClinet = createClient(superbaseURL, superbaseKEY)


const nameValue = document.getElementById('name').value;
const emailValue = document.getElementById('email').value;
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      
        <button type="submit">Submit</button>
      </form>
      
    
      <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
    <script src="script.js"></script>
</body>
</html>
https://github.com/NaddiyaSheraz/Batch--21-ALIYABAD.git
