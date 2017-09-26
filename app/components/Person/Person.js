import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesheet from './Person.css';

const Person = (props) => {
  const { className,
    name,
    birth,
    death,
    age,
    father,
    mother,
    childs,
  } = props;

  return (
    <div className={`Person ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="Person-name">{name}</div>
      <div className="Person-info">
        <table>
          <tbody>
            <tr>
              <td className="Person-tableCell">Years lived:</td>
              <td className="Person-tableCell">{age}</td>
            </tr>
            <tr>
              <td className="Person-tableCell">Birth:</td>
              <td className="Person-tableCell">{birth}</td>
            </tr>
            {death &&
              <tr>
                <td className="Person-tableCell">Death:</td>
                <td className="Person-tableCell">{death}</td>
              </tr>
            }
            { father &&
              <tr>
                <td className="Person-tableCell">Father:</td>
                <td className="Person-tableCell">
                  {father}
                </td>
              </tr>
            }
            { mother &&
              <tr>
                <td className="Person-tableCell">Mother:</td>
                <td className="Person-tableCell">
                  {mother}
                </td>
              </tr>
            }
            { childs &&
              <tr>
                <td className="Person-tableCell">Childs:</td>
                <td className="Person-tableCell">
                  <ul>
                    { childs.map((child) => {
                      return <li>{child}</li>;
                    })}
                  </ul>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

Person.defaultProps = {
  name: 'Max Mustermann',
  className: null,
  birth: -2000,
  death: 1000,
  age: 5000,
  father: null,
  mother: null,
  childs: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
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
