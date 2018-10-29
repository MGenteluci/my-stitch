exports = () => {
  const age = context.functions.execute('calculateMyAge');
  
  return context.functions.execute('numberOfVisitors')
  .then(currentVisitor => {
    return {
      'Welcome message': `Hello there! You are the visitor number ${currentVisitor}`,
      'About me': {
        name: 'Matheus Genteluci',
        age,
        role: 'Junior Software Developer',
        from: 'Rio de Janeiro - Brazil',
      },
    };
  });
};
