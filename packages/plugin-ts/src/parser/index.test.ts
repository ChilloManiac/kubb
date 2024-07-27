import { schemas } from '../../../plugin-oas/mocks/schemas.ts'

import * as parserType from './index.ts'

describe('type parse', () => {
  test.each(schemas.basic)('$name', ({ name, schema }) => {
    const text = parserType.parse(undefined, schema, {
      name,
      optionalType: 'questionToken',
      enumType: 'asConst',
    })
    expect(text).toMatchSnapshot()
  })
})
