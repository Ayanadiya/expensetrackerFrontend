import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Card, Modal, Button} from "react-bootstrap";
import ProfileForm from "../components/Form/ProfileForm";

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
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Complete Your Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProfileForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
   )
}

export default HomePage;