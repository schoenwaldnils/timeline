import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesheet from './Person.css';
import { ourTime } from '../../js/utils';

const Person = (props) => {
  const {
    className,
    tabIndex,
    name,
    birth,
    death,
    age,
    image,
    father,
    mother,
    children,
  } = props;

  if (!birth || !death) {
    return null;
  }

  return (
    <div className={`Person ${className}`} tabIndex={tabIndex}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      {name}
      <div className="Person-info">
        {image && <picture>
          <source srcSet={`${image}?w=300&fl=progressive`} media="(min-resolution: 120dpi)" />
          <img className="Person-image" src={`${image}?w=150&fl=progressive`} alt={`Bild von ${name}`} />
        </picture>}

        <table>
          <tbody>

            <tr>
              <td className="Person-tableCell">Geboren:</td>
              <td className="Person-tableCell">
                {ourTime(birth)}
              </td>
            </tr>

            {death && <tr>
              <td className="Person-tableCell">Gestorben:</td>
              <td className="Person-tableCell">
                {ourTime(death)}
              </td>
            </tr>}

            <tr>
              <td className="Person-tableCell">Lebensdauer:</td>
              <td className="Person-tableCell">{age} Jahre</td>
            </tr>

            {father && <tr>
              <td className="Person-tableCell">Vater:</td>
              <td className="Person-tableCell">
                {father}
              </td>
            </tr>}

            {mother && <tr>
              <td className="Person-tableCell">Mutter:</td>
              <td className="Person-tableCell">
                {mother}
              </td>
            </tr>}

            {children && <tr>
              <td className="Person-tableCell">Kinder:</td>
              <td className="Person-tableCell">
                <ul>
                  { children.map((child) => {
                    return <li key={child}>{child}</li>;
                  })}
                </ul>
              </td>
            </tr>}

          </tbody>
        </table>
      </div>
    </div>
  );
};

Person.defaultProps = {
  className: null,
  tabIndex: 0,
  image: null,
  name: 'Max Mustermann',
  birth: -2000,
  death: null,
  age: 5000,
  father: null,
  mother: null,
  children: null,
};

Person.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  birth: PropTypes.number,
  death: PropTypes.number,
  age: PropTypes.number,
  father: PropTypes.string,
  mother: PropTypes.string,
  children: PropTypes.array,
};

const StyledPerson = styled(Person)`
  width: ${props => props.age}px;
  margin-left: ${props => props.birth + 4026}px;
`;

export default StyledPerson;
