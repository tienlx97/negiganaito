import TaalOpcodes from '@negiganaito/error/utils/taal-opcodes'
import { fbErrorLite } from '..'

function _Core(a: any) {
  return retrieveElement(
    a,
    typeof a === 'string' ? document.getElementById(a) : a,
  )
}

function fromIDOrElement(idOrElement: any) {
  return retrieveElement(
    idOrElement,
    typeof idOrElement === 'string'
      ? document.getElementById(idOrElement)
      : idOrElement,
  )
}

function retrieveElement(idOrElement: any, element: any) {
  if (!element) {
    idOrElement = fbErrorLite(
      'Tried to get element with id of "%s" but it is not present on the page',
      String(idOrElement),
    )
    idOrElement.taalOpcodes = idOrElement.taalOpcodes || []
    idOrElement.taalOpcodes = [TaalOpcodes.PREVIOUS_FILE]
    throw idOrElement
  }
  return element
}

_Core.fromIDOrElement = fromIDOrElement

export default _Core
