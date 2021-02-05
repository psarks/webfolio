import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring'
import {Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton} from './modal.elements'
import penguin from '../../images/penguin.png'


export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
            config: {
            duration: 500
        },
            opacity: showModal ? 1 : 0,
            transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

  const closeModal = e => {
            if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

  const keyPress = useCallback(
        e => {
                if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
         [setShowModal, showModal]
    );

  useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    
    return(  
    
    <> 
        {showModal ? ( 
            <Background onClick={closeModal} ref={modalRef}>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={penguin} alt='resume' />
                    <ModalContent>
                        hi
                    </ModalContent>
                    <CloseModalButton araia-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>

                </ModalWrapper>
                </animated.div>
            </Background>
        ):null}
    </>
    );
};