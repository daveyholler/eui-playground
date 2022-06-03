import { useState } from 'react';

import {
  EuiBadge,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

interface IFlyoutProps {
  first_name: string;
  last_name: string;
  occupation: string;
}

export const Flyout: React.FC<IFlyoutProps> = ({
  first_name,
  last_name,
  occupation,
}) => {
  const [ isFlyoutOpen, setIsFlyoutOpen ] = useState(false)
  return (
    <>
      <EuiButtonEmpty flush="both" size="xs" onClick={() => setIsFlyoutOpen(true)}>View</EuiButtonEmpty>
      { isFlyoutOpen && (
        <EuiFlyout onClose={() => setIsFlyoutOpen(false)}>
          <EuiFlyoutHeader hasBorder>
            <EuiFlexGroup direction='column'>
              <EuiFlexItem>
                <EuiTitle><h1>{first_name} {last_name}</h1></EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem>
                <div>
                  <EuiBadge color="#b1666c" style={{ flexGrow: 0 }}>{occupation}</EuiBadge>
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiText>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </EuiText>
          </EuiFlyoutBody>
          <EuiFlyoutFooter>
            <EuiButton fill onClick={() => setIsFlyoutOpen(false)}>Go away</EuiButton>
          </EuiFlyoutFooter>
        </EuiFlyout>
      )} 
    </>
  )
}
