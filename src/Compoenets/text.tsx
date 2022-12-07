if (user) {
    const decodedJwt = parseJwt(user.accessToken);

    if (decodedJwt.exp * 1000 < Date.now()) {

    }
  }