import { useState } from "react";
import { Card, Modal, Button} from "react-bootstrap";
import ProfileForm from "../components/Form/ProfileForm";
import EmailButton from "../components/Button/EmailButton";

const HomePage=()=>{
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <div>
            <p>Welcome to Home Page</p>
            <Card className="d-flex">
                <Card.Body>Your profile is Incomplete.
                    <Button variant="link" onClick={handleOpen}>
                        Complete now
                    </Button>
                    <EmailButton/>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Body>
                    <ProfileForm onClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </div>
   )
}

export default HomePage;