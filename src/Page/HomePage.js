import { useState } from "react";
import { Card, Modal, Button} from "react-bootstrap";
import ProfileForm from "../components/Form/ProfileForm";
import EmailButton from "../components/Button/EmailButton";
import Logout from "../components/Button/Logout";
import ExpenseForm from "../components/Expense/ExpenseForm";
import { ExpenseProvider } from "../components/store/ExpenseContext";
import ExpenseList from "../components/Expense/ExpenseList";

const HomePage=()=>{
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <ExpenseProvider>
            <div>
                 <p>Welcome to Home Page</p>
                 <Logout/>
            </div>
           
            <Card className="d-flex">
                <Card.Body>Your profile is Incomplete.
                    <Button variant="link" onClick={handleOpen}>
                        Complete now
                    </Button>
                    <EmailButton/>
                </Card.Body>
            </Card>
            <ExpenseForm/>
            <ExpenseList />
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Body>
                    <ProfileForm onClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </ExpenseProvider>
   )
}

export default HomePage;