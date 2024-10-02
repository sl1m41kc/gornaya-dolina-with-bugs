'use client';

import { useState } from 'react';
import classes from './actions.module.css';
import Modal from '@/app/components/modal/modal';
import clsx from 'clsx';

type Action = 'booking' | 'living';

const Actions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: 'title',
    content: <>content</>,
  });

  const openModal = (action: Action) => {
    if (action === 'booking') {
      setModalContent({
        title: 'Условия бронирования',
        content: (
          <>
            <p>
              Бронирование осуществляется по&nbsp;предоплате в&nbsp;размере
              одних суток проживания.
            </p>
            <p>
              Отмена бронирования с&nbsp;возвратом 100% предоплаты возможна
              за&nbsp;10&nbsp;дней, менее чем за&nbsp;10&nbsp;дней &minus;50%,
              менее чем за&nbsp;5&nbsp;дней предоплата не&nbsp;возвращается.
            </p>
            <p>
              Возможность бронирования на&nbsp;одни сутки уточняйте
              по&nbsp;телефону.
            </p>
          </>
        ),
      });
    } else if (action === 'living') {
      setModalContent({
        title: 'Правила проживания',
        content: (
          <>
            <ol className={classes.numberList}>
              <li>Заезд после 14:00, выезд до&nbsp;11:00</li>
              <li>Соблюдение полной тишины после 22:00</li>
              <li>
                Использование портативных колонок запрещено на&nbsp;протяжении
                всего дня
              </li>
              <li>
                Курение разрешено только в&nbsp;мангальной и&nbsp;костровой
                зоне, включая электронные устройства
              </li>
            </ol>
          </>
        ),
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className={classes.buttons}>
      <button
        type="button"
        className={clsx('button', classes.button)}
        onClick={() => openModal('booking')}
      >
        Условия бронирования
      </button>
      <button
        type="button"
        className={clsx('button', classes.button)}
        onClick={() => openModal('living')}
      >
        Правила проживания
      </button>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className={classes.modalContent}>
          <h2 className={classes.title}>{modalContent.title}</h2>
          <div className={classes.content}>{modalContent.content}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Actions;
