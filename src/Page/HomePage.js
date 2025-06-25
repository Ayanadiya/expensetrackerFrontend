import React, { useState } from "react";
import { Card, Modal, Button} from "react-bootstrap";
import ProfileForm from "../components/Form/ProfileForm";
import EmailButton from "../components/Button/EmailButton";
import Logout from "../components/Button/Logout";
import ExpenseForm from "../components/Expense/ExpenseForm";
import ExpenseList from "../components/Expense/ExpenseList";
import { useSelector } from "react-redux";

const HomePage=()=>{
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing]= useState(false);
    const [currentExpense, setCurrentExpense]= useState(null);

    const expenses=useSelector(state =>state.expense.expenses);

    const total=expenses.reduce((total,expense)=>total+expense.amount,0);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const getEditing=(expense)=>{
         setIsEditing(true);
         setCurrentExpense(expense);
    }

    const closeEditing=()=>{
        setIsEditing(false);
        setCurrentExpense(null);
    }
    return (
        <React.Fragment>
            <div>
                 <p>Welcome to Home Page</p>
                 <Logout/>
                 {total>10000 && <Button>Buy Premium</Button>}
            </div>
           
            <Card className="d-flex">
                <Card.Body>Your profile is Incomplete.
                    <Button variant="link" onClick={handleOpen}>
                        Complete now
                    </Button>
                    <EmailButton/>
                </Card.Body>
            </Card>
            <ExpenseForm isEditing={isEditing} currentExpense={currentExpense} closeEditing={closeEditing}/>
            <ExpenseList openEditing={getEditing}/>
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Body>
                    <ProfileForm onClose={handleClose}/>
                </Modal.Body>
            </Modal>
    </React.Fragment>        
   )
}

export default HomePage;