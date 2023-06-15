
import './career.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import imageSrc1 from './pictures/FH-LOGO.png';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const JobForm = ({ onAddJob }) => {
  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobmode, setJobMode] = useState('');
  const [jobtype, setJobType] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
    // Reset form state
    setInputValue('');
    // Close the form
    setOpen(true);
    const newJob = {
      title,
      description,
      jobmode,
      jobtype,
    };
    onAddJob(newJob);
    setTitle('');
    setDescription('');
    setJobMode('');
    setJobType('');
  };

  return (
    <div>
    
    <Dialog open={open} onClose={() => setOpen(true)}>
      <DialogTitle>Pop-up Form</DialogTitle>
      <DialogContent>
        <TextField
          label="Enter a value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth/>
           <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
       <input
        type="text"
        placeholder="Job Mode"
        value={jobmode}
        onChange={(e) => setJobMode(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Job Type"
        value={jobtype}
        onChange={(e) => setJobType(e.target.value)}
        required
      />
      <button type="submit">Add Job</button>
     
    </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
   
  );
};



const CareerPage = () => {

  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  const editCard = (index, updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => (i === index ? updatedCard : card))
    );
  };

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);


  return (
    <div className="App">
     
        
        <nav> 
          
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/company">Company</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>
              <a href="/howtowork">How to work</a>
            </li>
            <li>
              <a href="/login">login</a>
            </li>
            <li>
              <Button id="signbtn"variant="contained" >Sign up</Button>
            </li>
          </ul>
        </nav>
    <div id="img1">
        <img src={imageSrc1} alt="" />
      </div>
     
      <section id='sec1'>
        
      <Button id="hire" >We're hiring</Button>
        <h1 id="be_a_part">Be a part of our mission</h1>
        <p id="p">We're looking for passionate people to join us on our mission. We value <br></br>
          flat hierarchies,clear communication,and full ownship and responsiblity
          <br></br>
          <br></br>
          <br></br>
          </p>
          <div class="button-row">
        
  <Button class="outline-button" onClick={toggleForm}>Add Job</Button> 
  <Button class="outline-button" >View all</Button>
  <Button class="outline-button">Development</Button>
  <Button class="outline-button">Design</Button>
  <Button class="outline-button">Marketing</Button>
  <Button class="outline-button">Custumer Service</Button>
  <Button class="outline-button">Operational</Button>
  <Button class="outline-button">Finance</Button>
  <Button class="outline-button">Mangement</Button>
  
</div>
      </section>

      <section id="sec2">
      {showForm ? (
          <JobForm onAddJob={addCard} />
        ) : (
           <p></p>

        )}
          <>
            {cards.map((card, index) => (
              <div key={index}>
                <Card class="card" sx={{ maxWidth: 1200 }}>
                  <CardContent style={{ position: 'relative' }}>
                    <Typography gutterBottom variant="h5" component="div"style={{ fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body3" color="black">
                      {card.description}
                    </Typography>
                    <Button
                      style={{ position: 'absolute', top: 10, right: 80 }}
                      onClick={() => deleteCard(index)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ position: 'absolute', top: 10, right: 10 }}
                      onClick={() => {
                        const updatedCard = {
                          ...card,
                          title: 'Updated Title',
                          description: 'Updated Description',
                        };
                        editCard(index, updatedCard);
                      }}
                    >
                      Edit
                    </Button>
                    <Button class="apply-button"style={{ position: 'absolute', top: 10, right: 150 }}>
                      Apply now
                    </Button>
                  </CardContent>
                  <CardActions>
                <Button class="outline-button">{card.jobmode}</Button>
                <Button class="outline-button">{card.jobtype}</Button>
              </CardActions>
                </Card>
              </div>
            ))}
           
          </>
        
      </section>

      <footer>
      
        <p>&copy; 2023 Fortehub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerPage;