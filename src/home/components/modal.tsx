import { useState } from 'react';
import {
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
} from '@elastic/eui';

export const Modal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <EuiButton onClick={() => setIsModalVisible(true)} color="accent" fill>Look, Sports!</EuiButton>
      { isModalVisible && (
        <EuiModal onClose={() => setIsModalVisible(false)}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Modal title</EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              nec varius dui. Suspendisse potenti. Vestibulum ac tortor at,
            </p>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButton onClick={() => setIsModalVisible(false)}>Save changes</EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  )
}
