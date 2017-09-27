import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesheet from './Person.css';

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
    childs,
  } = props;

  return (
    <div className={`Person ${className}`} tabIndex={tabIndex}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Person-name">{name}</div>
      <div className="Person-info">
        {image && <img className="Person-image" src={`${image}?w=150`} alt={`Bild von ${name}`} />}
        <table>
          <tbody>
            <tr>
              <td className="Person-tableCell">Jahre gelebt:</td>
              <td className="Person-tableCell">{age}</td>
            </tr>

            <tr>
              <td className="Person-tableCell">Geboren:</td>
              <td className="Person-tableCell">
                {birth <= 0 && `${birth * -1} v.u.Z.`}
                {birth >= 0 && `${birth} u.Z.`}
              </td>
            </tr>

            {death && <tr>
              <td className="Person-tableCell">Gestorben:</td>
              <td className="Person-tableCell">
                {death <= 0 && `${death * -1} v.u.Z.`}
                {death >= 0 && `${death} u.Z.`}
              </td>
            </tr>}

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

            {childs && <tr>
              <td className="Person-tableCell">Kinder:</td>
              <td className="Person-tableCell">
                <ul>
                  { childs.map((child) => {
                    return <li>{child}</li>;
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
  death: 1000,
  age: 5000,
  father: null,
  mother: null,
  childs: null,
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
  childs: PropTypes.array,
};

const StyledPerson = styled(Person)`
  width: ${props => props.age}px;
  margin-left: ${props => props.birth + 4026}px;
`;

export default StyledPerson;
