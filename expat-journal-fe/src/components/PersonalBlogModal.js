import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function PBlogModal (props){
    const {buttonLabel, className} = props;
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(true)
    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false)
    }
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true)
    }

    return(
        <div className="textModal">
            <Button onClick={toggle}>Read More</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{props.blog.title}:&nbsp;{props.blog.created_at}</ModalHeader>
            <ModalBody>
                {props.blog.textbox}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Exit</Button>
            </ModalFooter>
            </Modal>
        </div>
    )

}

export default PBlogModal