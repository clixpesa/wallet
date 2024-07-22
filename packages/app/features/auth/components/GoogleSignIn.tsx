import { Button } from 'ui'

import { IconGoogle } from './IconGoogle'

export function GoogleSignIn() {
  const handleOAuthSignIn = async () => {}

  return (
    <Button br="$10" onPress={() => handleOAuthSignIn()} icon={IconGoogle}>
      Sign in with Google
    </Button>
  )
}
