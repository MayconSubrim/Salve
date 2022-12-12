import "./Cursos.css"
import "./Modal.css"
import { forwardRef, useImperativeHandle, useState, useRef } from "react"
import { AnimatePresence, motion} from 'framer-motion'




export default function Cursos() {
  const modalRef = useRef();
  const modalRef2 = useRef();
  const video1 = "https://www.youtube.com/embed/ILWY4ctqwuo"
  const video2 = "https://www.youtube.com/embed/uNwymVbLRWc"

    return(
        <div className="content">
        <Modal ref={modalRef}>
        <iframe className="modal-content-videos"
        width="560" 
        height="315" 
        src={video1}
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
        </Modal>

        <Modal2 ref={modalRef2}>
        <iframe className="modal-content-videos"
        width="560" 
        height="315" 
        src={video2}
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay" 
        allowfullscreen></iframe>
        </Modal2>

        <div class="swipermySwiper">
          <p>Cartão de crédito</p>
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <img src="/Images/1.png" onClick={() => modalRef.current.open()} />
            </div>

            <div class="swiper-slide ">
              <img src="/Images/2.png" />
            </div>

            <div class="swiper-slide">
              <img src="/Images/3.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/4.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/5.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/6.png" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div>

          <img src="/images/entrebecos.png" width={1300} className="vanlus"></img>

        </div>

        <div class="swipermySwiper">
          <p>Financiamentos e suas desvantagens</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/Images/7.png" onClick={() => modalRef2.current.open2()}/>
            </div>
            <div class="swiper-slide">
              <img src="/Images/8.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/9.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/10.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/11.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/12.png" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <div class="swipermySwiper">
          <p>Imposto, Poupança e Compras</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/Images/13.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/14.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/15.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/16.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/17.png" />
            </div>
            <div class="swiper-slide">
              <img src="/Images/18.2.png" />
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

      </div>


    )
}

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0

            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0
            }}

            className="modal-backdrop-videos" />
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0
            }}
            className="modal-content-wrapper-videos">
            <motion.div
              className="modal-content-videos"
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              exit={{
                x: 100,
                opacity: 0
              }}
            >
              {props.children}
            </motion.div>
            <motion.div className="close-button-position" onClick={() => setOpen(false)}>
              <button className="close-button-decoration">X</button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
})

const Modal2 = forwardRef((props, ref2) => {
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref2, () => {
    return {
      open2: () => setOpen(true),
      close2: () => setOpen(false)
    }
  })
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0

            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0
            }}

            className="modal-backdrop-videos" />
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0
            }}
            className="modal-content-wrapper-videos">
            <motion.div
              className="modal-content-videos"
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              exit={{
                x: 100,
                opacity: 0
              }}
            >
              {props.children}
            </motion.div>
            <motion.div className="close-button-position" onClick={() => setOpen(false)}>
              <button className="close-button-decoration">X</button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
})