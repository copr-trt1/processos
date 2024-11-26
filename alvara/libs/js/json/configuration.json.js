Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"expedição de alvará","publishDate":"26/11/2024 17:03:23","pages":[{"id":"616125da-554b-41ad-95ac-5e4f77b5d20c","name":"Expedir Alvará","version":"1.0","author":"juliana.galvao","image":"files\\diagrams\\Expedir_Alvara.png","isSubprocessPage":false,"elements":[{"id":"2166ef69-2468-4b5a-ac04-a64e52d4c5de","name":"Expedir Alvará Judicial","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":458.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"36bc3185-f3da-4be6-9a70-07b5be93c807","name":"Pagamento do depósito","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":142.0,"y":194.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"dfe20757-05db-4eee-bc44-0962d85e2ee9","name":"Identificar o depósito ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Pode ser feita no PJe no escaninho na aba novos depósitos judiciais. </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":249.6,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9b0de27b-29ee-4e51-9311-d3a34cfe2ba4","name":"Elaborar despacho de liberação de valores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":459.2,"y":176.5}],"radius":0.0,"height":67.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ec48d53f-1cfe-4de8-a101-3554b560c55e","name":"Confeccionar alvará","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":688.8,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b3cf90d2-8ba9-49b4-ab85-b077f16cc972","name":"Conferir Alvará","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":898.399963,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dedd460c-68bd-4d20-adec-7b2c311f6bbe","name":"Assinar Alvará","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1108.0,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"55ba3950-e3e6-481b-a14b-1bc14f884a57","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1238.0,"y":189.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"SIF","elementType":"SequenceFlow","properties":[]},{"name":"SISCONDJ","elementType":"SequenceFlow","properties":[]}]},{"id":"a2e386ac-c588-4d1b-ac65-0e84d7c79092","name":"Notificar parte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1318.0,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"893f5bea-36fa-45f5-adf1-50c5bba62f30","name":"Aguardar andamentos até o momento de arquivamento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1465.0,"y":194.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"0a86dae2-9c61-4c61-a123-bc5dbb7b56b8","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1558.33337,"y":189.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"SISCONDJ","elementType":"SequenceFlow","properties":[]},{"name":"SIF","elementType":"SequenceFlow","properties":[]},{"name":"Depósito recursal antes 2017 de nov","elementType":"SequenceFlow","properties":[]}]},{"id":"9f3783a2-79bf-4554-958a-6cfef5b91adb","name":"Conferir se ainda existem depósitos com saldo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1528.83337,"y":289.0}],"radius":0.0,"height":67.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3e366118-81f2-4742-83a2-12a9f2b9445a","name":"Arquivar processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1682.23535,"y":179.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce1edd23-ef31-4973-879f-aede146e86aa","name":"Saldo zerado/ Processo arquivado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1820.0,"y":194.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"8b1386e0-2419-445c-83d5-212dd891aecf","name":"Consultar a Conectividade Social","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1533.33337,"y":51.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"232434fa-7c42-4ef5-b100-369fcb3b72b5","name":"Juntar alvará no PJe","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.0,"y":287.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fb99b133-a33a-4e14-8081-54b4d9cb3ea2","name":"Modelo de despacho","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":496.0,"y":266.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]}]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"616125da-554b-41ad-95ac-5e4f77b5d20c","containerName":"Expedir Alvará","isSubprocess":false,"elements":[{"id":"2166ef69-2468-4b5a-ac04-a64e52d4c5de","value":"Expedir Alvará Judicial"},{"id":"fb99b133-a33a-4e14-8081-54b4d9cb3ea2","value":"Modelo de despacho"},{"id":"36bc3185-f3da-4be6-9a70-07b5be93c807","value":"Pagamento do depósito"},{"id":"dfe20757-05db-4eee-bc44-0962d85e2ee9","value":"Identificar o depósito "},{"id":"9b0de27b-29ee-4e51-9311-d3a34cfe2ba4","value":"Elaborar despacho de liberação de valores"},{"id":"ec48d53f-1cfe-4de8-a101-3554b560c55e","value":"Confeccionar alvará"},{"id":"b3cf90d2-8ba9-49b4-ab85-b077f16cc972","value":"Conferir Alvará"},{"id":"dedd460c-68bd-4d20-adec-7b2c311f6bbe","value":"Assinar Alvará"},{"id":"55ba3950-e3e6-481b-a14b-1bc14f884a57","value":""},{"id":"a2e386ac-c588-4d1b-ac65-0e84d7c79092","value":"Notificar parte"},{"id":"232434fa-7c42-4ef5-b100-369fcb3b72b5","value":"Juntar alvará no PJe"},{"id":"893f5bea-36fa-45f5-adf1-50c5bba62f30","value":"Aguardar andamentos até o momento de arquivamento"},{"id":"0a86dae2-9c61-4c61-a123-bc5dbb7b56b8","value":""},{"id":"9f3783a2-79bf-4554-958a-6cfef5b91adb","value":"Conferir se ainda existem depósitos com saldo"},{"id":"3e366118-81f2-4742-83a2-12a9f2b9445a","value":"Arquivar processo"},{"id":"8b1386e0-2419-445c-83d5-212dd891aecf","value":"Consultar a Conectividade Social"},{"id":"ce1edd23-ef31-4973-879f-aede146e86aa","value":"Saldo zerado/ Processo arquivado"},{"id":"12446c6d-05d7-4715-ba0a-0252f453c06a"},{"id":"d4a49be3-6fc1-45ae-8e71-3886ce91604a"},{"id":"c1f3a1f0-0369-419f-a8b7-2006c005fddb"},{"id":"7859dcf2-622a-4b7e-89a2-c1e07bad1dee"},{"id":"014d3365-e5bd-4c00-9378-8da0af425797"},{"id":"244d655a-ab79-4cbb-8de5-8a0d31508672"},{"id":"e323abec-1a0b-41fb-bdb0-4f85e17a2d57"},{"id":"2a4f8df9-7d7e-4f7a-956e-541eef082844"},{"id":"4018ccd4-0a89-477c-a66d-4fdcd717d155"},{"id":"b59ad3bf-30b1-4322-9438-2076502993d6"},{"id":"b9d349ec-cd8e-4566-be3c-8448e75ac7ea"}]}]}