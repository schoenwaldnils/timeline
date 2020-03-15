import React from 'react'
import PropTypes from 'prop-types'

import { ourTime } from '../../js/utils'

import './PagePerson.css'

const PagePerson = ({
  birth,
  death,
  age,
  father,
  mother,
  children,
  image,
  name,
  content,
}) => {
  return (
    <div className="PagePerson">
      <img className="PagePerson-image" src={image} alt={name} />
      <div className="PagePerson-content">
        <h1 className="PagePerson-name">{name}</h1>

        <table className="PagePerson-table">
          <tbody>
            <tr>
              <td className="PagePerson-tableCell">Geboren:</td>
              <td className="PagePerson-tableCell">{ourTime(birth)}</td>
            </tr>

            {death && (
              <tr>
                <td className="PagePerson-tableCell">Gestorben:</td>
                <td className="PagePerson-tableCell">{ourTime(death)}</td>
              </tr>
            )}

            <tr>
              <td className="PagePerson-tableCell">Lebensdauer:</td>
              <td className="PagePerson-tableCell">{age} Jahre</td>
            </tr>

            {father && (
              <tr>
                <td className="PagePerson-tableCell">Vater:</td>
                <td className="PagePerson-tableCell">{father}</td>
              </tr>
            )}

            {mother && (
              <tr>
                <td className="PagePerson-tableCell">Mutter:</td>
                <td className="PagePerson-tableCell">{mother}</td>
              </tr>
            )}

            {children && (
              <tr>
                <td className="PagePerson-tableCell">Kinder:</td>
                <td className="PagePerson-tableCell">
                  <ul>
                    {children.map(child => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div
          className="u-richText"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <a className="PagePerson-backLink u-link" href="/">
          {'<'} Zurück zur Timeline
        </a>
      </div>
    </div>
  )
}

PagePerson.defaultProps = {
  birth: undefined,
  death: undefined,
  age: undefined,
  father: null,
  mother: null,
  children: [],
  image: undefined,
  content: null,
}

PagePerson.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.number,
  death: PropTypes.number,
  age: PropTypes.number,
  father: PropTypes.node,
  mother: PropTypes.node,
  children: PropTypes.arrayOf(PropTypes.node),
  image: PropTypes.string,
  content: PropTypes.node,
}

export default PagePerson
