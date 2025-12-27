import hashlib

def sign_triple(data):
    # Example signing function
    return hashlib.sha256(data.encode()).hexdigest()

# Add your code logic