import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function TextModal (props){
    const {buttonLabel, className} = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <div className="textModal">
            <Button onClick={toggle} className="buttons2">Read About This Photo</Button>
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

export default TextModal