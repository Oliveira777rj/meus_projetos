const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const createToken = require('./cript/user_cript');

const app = express();

app.use(express.json());

app.post('/register',async (req,res) => {

  const {name, email, password} = req.body;

  if(!name){
    res.status(422).json({ message: 'O nome é obrigatorio' })
    return
  }
  if(!email){
    res.status(422).json({ message: 'O e-mail é obrigatorio' })
    return
  } if(!password){
    res.status(422).json({ message: 'A senha é obrigatorio' })
    return
  }

  const existe = await User.findOne({email})

  if(existe){
    res.status(422).json({ message: 'E-mail já cadastro, utilize outro e-mail' })
    return
  }

  // criptografando senha
  const salt = await bcrypt.genSalt(3)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = new User({

    name,
    email,
    password:passwordHash
  })
    try { 
      const newUser = await user.save()
      await createToken(newUser, req, res)
    } catch (error) {
      res.status(500).json({ message:error })
    }
});

app.get('/users', async (req,res) => {
  const users = await User.find()

  try {
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message:error })
  }
});

app.delete('/delete/:id',async (req,res) => {
  
  try {
    const id = req.params.id
    await User.findByIdAndDelete(id);
    const users = await User.find()

    res.status(200).json({users})
  } catch (error) {
    res.json(error)
  }
});

app.listen(8080,() => {
  console.log('Servidor rodando na porta 8080')
});